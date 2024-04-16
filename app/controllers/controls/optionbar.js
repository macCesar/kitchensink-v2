import { logger } from 'logger'

function onTextOptionBarClicked(event) {
  const message = `${L('clicked_on_text_only_button_')} ${event.source.labels[event.index].title}`
  alert(message)
  logger.log(message)
}

function onImageOptionBarClicked({ index }) {
  const message = `${L('clicked_on_image_only_button_index_')} ${index}`
  alert(message)
  logger.log(message)
}

function onImageTextOptionBarClicked(event) {
  const message = `${L('clicked_on_image_text_button_')} ${event.source.labels[event.index].title}`
  alert(message)
  logger.log(message)
}

function onVerticalOptionBarClicked(event) {
  const message = `${L('clicked_on_vertical_button_')} ${event.source.labels[event.index].title}`
  alert(message)
  logger.log(message)
}
