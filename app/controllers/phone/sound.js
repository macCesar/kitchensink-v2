import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function openSoundComponent(event) {
  const identifier = `phone/${event.section.getItemAt(event.itemIndex).properties.itemId}`
  const component = Alloy.createController(identifier).getView()

  Alloy.CFG.tabGroup.activeTab.open(component)
  logger.log('Ti.UI.TabGroup.activeTab.open', identifier)
}
