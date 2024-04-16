import { logger } from 'logger'

function onShowAlertDialog() {
  $.alert.show()
}

function onAlertDialogClicked({ index }) {
  $.resultLabel.applyProperties({
    text: `${L('selected_button_at_index_')} ${index}`
  })
  logger.log(`Ti.UI.AlertDialog selected button at index: ${index}`)
}
