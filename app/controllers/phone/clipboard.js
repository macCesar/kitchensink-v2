/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function copyText() {
  if ($.copyField.value.length > 0) {
    Ti.UI.Clipboard.setText($.copyField.value)
    alert(L('copied_'))
  } else {
    alert(L('enter_some_text_before___'))
  }
}

function pasteText() {
  if (Ti.UI.Clipboard.hasText() === true) {
    $.pasteField.applyProperties({ value: Ti.UI.Clipboard.getText() })
  } else {
    alert(L('no_text_on_clipboard_'))
  }
}
