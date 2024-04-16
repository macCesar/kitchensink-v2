import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function onTextButtonBarClicked(event) {
  const message = `${L('clicked_on_button_')} ${event.source.labels[event.index].title}`
  alert(message)
  logger.log(message)
}

function onImageButtonBarClicked({ index }) {
  const message = `${L('clicked_on_image_button_index_')} ${index}`
  alert(message)
  logger.log(message)
}
