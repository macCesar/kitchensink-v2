import { logger } from 'logger'

function onTextOptionBarClicked(event) {
  const message = `Clicked on text-only button: ${event.source.labels[event.index].title}`
  alert(message)
  logger.log(message)
}

function onImageOptionBarClicked({ index }) {
  const message = `Clicked on image-only button index: ${index}`
  alert(message)
  logger.log(message)
}

function onImageTextOptionBarClicked(event) {
  const message = `Clicked on image/text button: ${event.source.labels[event.index].title}`
  alert(message)
  logger.log(message)
}

function onVerticalOptionBarClicked(event) {
  const message = `Clicked on vertical button: ${event.source.labels[event.index].title}`
  alert(message)
  logger.log(message)
}
