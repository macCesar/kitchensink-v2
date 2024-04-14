import { logger } from 'logger'

function onShowOptionDialog() {
  $.dialog.show()
}

function onOptionDialogClicked({ index }) {
  $.resultLabel.text = `Selected option at index: ${index}`
  logger.log(`Ti.UI.OptionDialog selected option at index: ${index}`)
}
