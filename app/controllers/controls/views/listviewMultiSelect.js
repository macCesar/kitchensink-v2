/**
 * Creates a ListView section with the given number of row items.
 * @param {string} sectionTitle The name to be shown in section's header title.
 * @param {number} rowCount Number of rows to create in section.
 * @returns {Object} The created ListView section.
*/
function createListSection(sectionTitle, rowCount) {
  const items = []
  for (let index = 1; index <= rowCount; index++) {
    items.push({
      properties: {
        title: `${L('row')} ${index}`,
        // This property normally enables swipe-to-delete,
        // but on iOS this shows a checkbox if ListView property "showSelectionCheck" is true.
        canEdit: !!OS_IOS,
      }
    })
  }
  const section = Ti.UI.createListSection({
    headerTitle: sectionTitle,
    items: items,
  })
  return section
}

/** Enables ListView's editing mode for multi-selection, if not done already. */
function enableSelectionMode() {
  // Do not continue if already in edit mode.
  if ($.listView.editing) {
    return
  }

  // Enable edit mode.
  $.listView.applyProperties({ editing: true })

  // Show selection options in top title bar.
  const selectedMessage = `${$.listView.selectedItems.length} ${L('selected')}`
  if (OS_IOS) {
    $.itemsSelectedLabel.text = selectedMessage
    $.editToolbar.applyProperties({ height: Ti.UI.SIZE, visible: true })
    $.mainToolbar.applyProperties({ height: 0, visible: false })
    $.win.applyProperties({ leftNavButton: $.selectAllButton, rightNavButton: $.cancelButton })
  } else if (OS_ANDROID) {
    $.editToolbar.applyProperties({ title: selectedMessage, visible: true })
    $.mainToolbar.applyProperties({ visible: false })
    $.win.activity.setSupportActionBar($.editToolbar)
  }
}

/** Disables ListView's editing mode, if not done already. */
function disableSelectionMode() {
  // Do not continue if edit mode is already disabled.
  if ($.listView.editing === false) {
    return
  }

  // Disable edit mode.
  $.listView.editing = false

  // Hide selection options in top title bar.
  if (OS_IOS) {
    $.editToolbar.applyProperties({ height: 0, visible: false })
    $.mainToolbar.applyProperties({ height: Ti.UI.SIZE, visible: true })
    $.win.applyProperties({ leftNavButton: null, rightNavButton: $.editButton })
  } else if (OS_ANDROID) {
    $.editToolbar.applyProperties({ visible: false })
    $.mainToolbar.applyProperties({ visible: true })
    $.win.activity.setSupportActionBar($.mainToolbar)
  }
}

/** Enables ListView edit mode and selects all items. */
function selectAll() {
  enableSelectionMode()
  for (let sectionIndex = 0; sectionIndex < $.listView.sectionCount; sectionIndex++) {
    const section = $.listView.sections[sectionIndex]
    for (let itemIndex = 0; itemIndex < section.itemCount; itemIndex++) {
      $.listView.selectItem(sectionIndex, itemIndex)
    }
  }
  if (OS_IOS) {
    onItemsSelected({ selectedItems: $.listView.selectedItems })
  }
}

/** Asks user if okay to delete, then deletes all selected items, and disables edit mode. */
function deleteSelectedItems() {
  // Fetch all selected items. Do not continue if no selection was made.
  const selectedItems = $.listView.selectedItems
  if (selectedItems.length <= 0) {
    return
  }

  // Ask the end-user if it's okay to delete the selected items.
  const dialog = Ti.UI.createAlertDialog({
    message: L('are_you_sure_you_want_to_delete___', ''),
    buttonNames: [L('yes'), L('no')],
  })
  dialog.addEventListener('click', function({ index }) {
    // Do not continue unless "Yes" was selected.
    if (index !== 0) {
      return
    }

    // Reverse sort the selected items.
    selectedItems.sort((item1, item2) => {
      if (item1.sectionIndex !== item2.sectionIndex) {
        return item2.sectionIndex - item1.sectionIndex
      }
      return item2.itemIndex - item1.itemIndex
    })

    // Delete all selected items.
    for (const nextItem of selectedItems) {
      nextItem.section.deleteItemsAt(nextItem.itemIndex, 1, { animated: false })
    }

    // Remove empty sections.
    for (let sectionIndex = $.listView.sectionCount - 1; sectionIndex >= 0; sectionIndex--) {
      const section = $.listView.sections[sectionIndex]
      if (section.itemCount <= 0) {
        $.listView.deleteSectionAt(sectionIndex)
      }
    }

    // Disable selection mode.
    disableSelectionMode()
  })
  dialog.show()
}

/** Displays a dialog listing all selected items in ListView. */
function shareSelectedItems() {
  // Fetch all selected items. Do not continue if no selection was made.
  const selectedItems = $.listView.selectedItems
  if (selectedItems.length <= 0) {
    return
  }

  // Display a dialog listing all selected items.
  let message = L('sharing_selected_items_', '')
  for (const nextItem of selectedItems) {
    const section = nextItem.section
    message += `\n- ${section.headerTitle}: ${section.getItemAt(nextItem.itemIndex).properties.title}`
  }
  alert(message)
}

/** Called when the window has been opened. */
function onWindowOpen() {
  if (OS_ANDROID) {
    $.win.activity.actionBar.displayHomeAsUp = true
    $.win.activity.actionBar.onHomeIconItemSelected = () => {
      if ($.mainToolbar.visible) {
        $.win.close()
      } else {
        disableSelectionMode()
      }
    }
  }
}

/** Called when the window's size/layout and safe-area padding has changed. */
function onWindowPostLayout() {
  if (OS_IOS) {
    // Re-layout views to compensate for bottom safe-area padding such as iOS' bottom home indicator bar.
    // Note: We do this because our toolbar is docked to the bottom of the window.
    $.listView.applyProperties({ height: $.win.size.height - ($.editToolbar.size.height + $.win.safeAreaPadding.bottom) })
    $.bottomPaddingView.applyProperties({ height: $.win.safeAreaPadding.bottom })
  }
}

/** Called when the Android back button was pressed. */
function onAndroidBack() {
  if ($.listView.editing) {
    disableSelectionMode()
  } else {
    $.win.close()
  }
}

/**
 * Called on Android when ListView has been long-pressed. Enables "edit" mode.
 * @param {Object} e - The event object.
 */
function onLongPressed(event) {
  if (OS_ANDROID && event.section && !$.listView.editing) {
    enableSelectionMode()
    $.listView.selectItem(event.sectionIndex, event.itemIndex)
  }
}

/**
 * Called when a ListView item has been selected/checked in "edit" mode.
 * @param {Object} e - The event object.
 */
function onItemsSelected({ selectedItems }) {
  const message = `${selectedItems.length} ${L('selected')}`
  if (OS_IOS) {
    $.itemsSelectedLabel.applyProperties({ text: message })
  } else if (OS_ANDROID) {
    // Update selection count in top toolbar.
    $.editToolbar.applyProperties({ title: message })

    // Disable "edit" mode once all items have been unselected.
    if (selectedItems.length <= 0) {
      disableSelectionMode()
    }
  }
}

/**
 * Called when a ListView item has been tapped on while "edit" mode is disabled.
 * @param {Object} e - The event object.
 */
function onItemClicked(event) {
  if (!$.listView.editing) {
    alert(`${L('tapped_on___', '')}\n${event.section.headerTitle}: ${event.section.getItemAt(event.itemIndex).properties.title}`)
  } else if (OS_IOS) {
    onItemsSelected({ selectedItems: $.listView.selectedItems })
  }
}

// Add sections/rows to the ListView.
$.listView.sections = [
  createListSection(L('section_1'), 10),
  createListSection(L('section_2'), 10),
  createListSection(L('section_3'), 10),
  createListSection(L('section_4'), 10),
]

// Initialize iOS buttons to be used in navigation bar.
if (OS_IOS) {
  $.selectAllButton = Ti.UI.createButton({ title: L('select_all') })
  $.selectAllButton.addEventListener('click', selectAll)
  $.editButton = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.EDIT })
  $.editButton.addEventListener('click', enableSelectionMode)
  $.cancelButton = Ti.UI.createButton({ systemButton: Ti.UI.iOS.SystemButton.CANCEL })
  $.cancelButton.addEventListener('click', disableSelectionMode)
  $.win.applyProperties({ rightNavButton: $.editButton })
}

// Initialize Android ActionBar, Toolbars, and menu items.
if (OS_ANDROID) {
  $.win.activity.supportToolbar = $.mainToolbar
  $.editToolbar.navigationIcon = Ti.App.Android.R.drawable.ic_baseline_close_24

  $.win.activity.onCreateOptionsMenu = ({ menu }) => {
    if ($.mainToolbar.visible) {
      const selectMenuItem = menu.add({
        title: L('select'),
        showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER,
      })

      selectMenuItem.addEventListener('click', enableSelectionMode)
    } else {
      const shareMenuItem = menu.add({
        title: L('share'),
        titleCondensed: '',
        icon: Ti.App.Android.R.drawable.ic_baseline_share_24,
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
      })

      shareMenuItem.addEventListener('click', shareSelectedItems)

      const deleteMenuItem = menu.add({
        title: L('delete'),
        titleCondensed: '',
        icon: Ti.App.Android.R.drawable.ic_baseline_delete_24,
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
      })

      deleteMenuItem.addEventListener('click', deleteSelectedItems)
    }

    const selectAllMenuItem = menu.add({
      title: L('select_all'),
      showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER,
    })

    selectAllMenuItem.addEventListener('click', selectAll)
  }
}
