// Assign the 'pop' feature to the button
$.button.applyProperties({ previewContext: $.context })

function actionTitle(event) {
  alert(`${L('title_')} ${event.title} / ${L('style_')} ${event.style} / ${L('index_')} ${event.index}`)
}

function action(event) {
  alert(`${L('title_')} ${event.title} / ${L('style_')} ${event.style} / ${L('index_')} ${event.index}`)
}

function subAction(event) {
  alert(`${L('title_')} ${event.title} / ${L('style_')} ${event.style} / ${L('subindex_')} ${event.index}`)
}

// Pop the preview
function pop() {
  $.detailWin.add($.detailText)
  $.detailWin.add($.buttonBack)
  $.detailWin.open()
}

function goBack() {
  $.detailWin.close()
}
