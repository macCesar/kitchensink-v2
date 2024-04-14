import { logger } from 'logger'

function onShowAlertDialog() {
  $.alert.show()
}

function onAlertDialogClicked({ index }) {
  $.resultLabel.text = `Selected button at index: ${index}`
  logger.log(`Ti.UI.AlertDialog selected button at index: ${index}`)
}
