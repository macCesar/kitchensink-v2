import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
  if (OS_IOS) {
    Ti.App.iOS.addEventListener('shortcutitemclick', handleShortcutItem)
  }

  Alloy.CFG.tabGroup = $.index

  $.index.open()
}())

function handleShortcutItem(event) {
  logger.log('Ti.App.iOS.shortcutitemclick', event)
}
