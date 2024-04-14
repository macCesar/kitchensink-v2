import { logger } from 'logger'

function openComponent(event) {
  const identifier = `controls/dialogs/${event.section.getItemAt(event.itemIndex).properties.itemId}`
  const component = Alloy.createController(identifier).getView()

  Alloy.Globals.setAndroidBackButton(component)
  Alloy.CFG.tabGroup.activeTab.open(component)

  logger.log('Ti.UI.TabGroup.activeTab.open', identifier)
}
