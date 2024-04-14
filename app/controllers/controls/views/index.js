import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function openComponent(event) {
  const identifier = 'controls/views/' + event.section.getItemAt(event.itemIndex).properties.itemId
  const component = Alloy.createController(identifier).getView()

  if (OS_ANDROID && identifier !== 'controls/views/listviewMultiSelect') {
    Alloy.Globals.setAndroidBackButton(component)
  }
  Alloy.CFG.tabGroup.activeTab.open(component)

  logger.log('Ti.UI.TabGroup.activeTab.open', identifier)
}
