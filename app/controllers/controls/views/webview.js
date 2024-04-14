import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function onBeforeLoad(event) {
  logger.log('Ti.UI.WebView will start loading content', event)
}

function onLoad(event) {
  logger.log('Ti.UI.WebView completed loading content', event)
}
