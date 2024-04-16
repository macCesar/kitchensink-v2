import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function onFocus() {
  $.window.removeEventListener('focus', onFocus)
  validateDocsInfo()
}

function validateDocsInfo() {
  if (!Ti.App.Properties.getBool('noticeShown', false)) {
    const alertNotice = Ti.UI.createAlertDialog({
      title: L('notice'),
      message: L('while_this_kitchenSink_provides___'),
      buttonNames: [L('alright_'), L('visit_docs'), L('dont_show_again')],
      cancel: 0,
      destructive: 2
    })

    alertNotice.addEventListener('click', ({ index }) => {
      if (index === 1) {
        Ti.Platform.openURL('https://titaniumsdk.com')
      } else if (index === 2) {
        Ti.App.Properties.setBool('noticeShown', true)
      }
    })

    alertNotice.show()
  }
}

function openComponent(event) {
  const identifier = `controls/${event.section.getItemAt(event.itemIndex).properties.itemId}`
  const component = Alloy.createController(identifier).getView()

  if (OS_ANDROID && identifier !== 'controls/drawer') {
    Alloy.Globals.setAndroidBackButton(component)
  }
  Alloy.CFG.tabGroup.activeTab.open(component)

  logger.log('Ti.UI.TabGroup.activeTab.open', identifier)
}
