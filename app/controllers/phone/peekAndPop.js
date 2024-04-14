// Assign the 'pop' feature to the button
$.button.previewContext = $.context

function actionTitle(event) {
  alert(`Title: ${event.title} / Style: ${event.style} / Index: ${event.index}`)
}

function action(event) {
  alert(`Title: ${event.title} / Style: ${event.style} / Index: ${event.index}`)
}

function subAction(event) {
  alert(`Title: ${event.title} / Style: ${event.style} / Subindex: ${event.index}`)
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
