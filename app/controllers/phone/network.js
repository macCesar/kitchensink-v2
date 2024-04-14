/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
  $.statusLabel.text = `Network type: ${Ti.Network.networkType}, online: ${Ti.Network.online}, name: ${Ti.Network.networkTypeName}`

  Ti.Network.addEventListener('change', (event) => {
    $.eventLabel.text = `Change fired! Network type: ${event.networkType}, online: ${event.online}, name: ${event.networkTypeName}`
  })
}())
