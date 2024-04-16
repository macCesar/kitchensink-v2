import { logger } from 'logger'

function onShowOptionDialog() {
  $.dialog.show()
}

function onOptionDialogClicked({ index }) {
  $.resultLabel.text = `${L('selected_button_at_index_')} ${index}`
  logger.log(`Ti.UI.OptionDialog selected option at index: ${index}`)
}
