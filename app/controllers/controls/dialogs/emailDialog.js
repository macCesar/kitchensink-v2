function onShowEMailDialog() {
  const dialog = Ti.UI.createEmailDialog()
  if (dialog.isSupported()) {
    dialog.applyProperties({
      subject: L('this_is_the_subject'),
      messageBody: L('this_is_the_body___'),
      toRecipients: ['john.doe@domain.com', 'jane.doe@domain.com'],
    })
    dialog.open()
  } else {
    alert(L('email_app_not_configured___'))
  }
}
