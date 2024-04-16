/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
  $.statusLabel.applyProperties({
    text: `${L('networkd_type_')} ${Ti.Network.networkType}, ${L('online_')} ${Ti.Network.online}, ${L('name_')} ${Ti.Network.networkTypeName}`
  })

  Ti.Network.addEventListener('change', (event) => {
    $.eventLabel.applyProperties({
      text: `${L('change_fired_')} ${L('networkd_type_')} ${event.networkType}, ${L('online_')} ${event.online}, ${L('name_')} ${event.networkTypeName}`
    })
  })
}())
