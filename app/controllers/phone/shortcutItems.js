import { logger } from 'logger'
let appShortcuts;

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
  // If supported, create an applicationShortcuts instance
  if (Ti.UI.iOS.forceTouchSupported) {
    appShortcuts = Ti.UI.iOS.createApplicationShortcuts()
  }

}())

/**
 * Event handler set in view to list all static shortcuts
 */

function listStaticShortcuts() {
  if (!appShortcuts) {
    alert(L('this_device_does_not_support_force_touch'))
    return
  }

  logger.log('Ti.UI.iOS.ApplicationShortcuts.listStaticShortcuts', appShortcuts.listStaticShortcuts())
}

/**
 * Event handler set in view to list all dynamic shortcuts
 */

function listDynamicShortcuts() {
  if (!appShortcuts) {
    alert(L('this_device_does_not_support_force_touch'))
    return
  }

  const res = appShortcuts.listDynamicShortcuts()

  logger.log('Ti.UI.iOS.ApplicationShortcuts.listDynamicShortcuts', res)

  // If don't have any, explain how to create it
  if (res.length === 0) {
    Ti.UI.createAlertDialog({
      title: 'None',
      message: L('use___to_create_a_dynamic shortcut')
    }).show()
  }
}

/**
 * Event handler set in view to check if our dynamic shortcut exists
 */

function dynamicShortcutExists() {
  if (!appShortcuts) {
    alert(L('this_device_does_not_support_force_touch'))
    return
  }

  const res = appShortcuts.dynamicShortcutExists('details')

  logger.log('Ti.UI.iOS.ApplicationShortcuts.dynamicShortcutExists', 'details', res)

  // If don't have it, explain how to create it
  if (!res) {
    Ti.UI.createAlertDialog({
      title: L('does_not_exist'),
      message: L('use___to_create_a_dynamic shortcut', 'Use createDynamicShortcut() to create a dynamic shortcut.')
    }).show()
  }
}

/**
 * Event handler set in view to get our dynamic shortcut
 */

function getDynamicShortcut() {
  if (!appShortcuts) {
    alert(L('this_device_does_not_support_force_touch'))
    return
  }

  const res = appShortcuts.getDynamicShortcut('details')

  logger.log('Ti.UI.iOS.ApplicationShortcuts.getDynamicShortcut', 'details', res)

  // If don't have it, explain how to create it
  if (!res) {
    Ti.UI.createAlertDialog({
      title: L('does_not_exist'),
      message: L('use___to_create_a_dynamic shortcut')
    }).show()
  }
}

/**
 * Event handler set in view to remove our dynamic shortcut
 */

function removeDynamicShortcut() {
  if (!appShortcuts) {
    alert(L('this_device_does_not_support_force_touch'))
    return
  }

  appShortcuts.removeDynamicShortcut('details')

  // Explain how to (re)create it
  Ti.UI.createAlertDialog({
    title: 'Removed',
    message: L('use___to_create_a_dynamic shortcut')
  }).show()
}

/**
 * Event handler set in view to create a new dynamic shortcuts
 */

function createDynamicShortcut() {
  if (!appShortcuts) {
    alert(L('this_device_does_not_support_force_touch'))
    return
  }

  appShortcuts.addDynamicShortcut({

    // Must be unique to identify it in the shortcutitemclick-listener in index.js
    itemtype: 'details',

    title: 'Titanium rocks!',
    subtitle: '(Dynamically created)',

    // A grey-scale icon of 35x35dp
    icon: 'images/icons/shortcutItemIcon.png',

    // Or a system-provided icon
    // icon: Ti.UI.iOS.SHORTCUT_ICON_TYPE_LOVE,

    // A custom payload
    userInfo: {
      created_at: Date.now()
    }
  })
}

/**
 * Event handler set in view to remove all dynamic shortcuts
 */

function removeAllDynamicShortcuts() {
  if (!appShortcuts) {
    alert(L('this_device_does_not_support_force_touch'))
    return
  }

  appShortcuts.removeAllDynamicShortcuts()

  // Explain how to create our dynamic shortcut
  Ti.UI.createAlertDialog({
    title: 'Removed',
    message: L('use___to_create_a_dynamic shortcut')
  }).show()
}
