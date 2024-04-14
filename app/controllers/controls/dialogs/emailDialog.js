function onShowEMailDialog() {
  const dialog = Ti.UI.createEmailDialog()
  if (dialog.isSupported()) {
    dialog.applyProperties({
      subject: 'This is the subject',
      messageBody: 'This is the body.\nThis is the second line.',
      toRecipients: ['john.doe@domain.com', 'jane.doe@domain.com'],
    })
    dialog.open()
  } else {
    alert('E-mail app not configured on this device.')
  }
}
