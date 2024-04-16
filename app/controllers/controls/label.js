/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function changeToCenterAlignment() {
  $.myLabel.applyProperties({ textAlign: 'center' })
}

function changeToLeftAlignment() {
  $.myLabel.applyProperties({ textAlign: 'left' })
}

function changeToRightAlignment() {
  $.myLabel.applyProperties({ textAlign: 'right' })
}

function changeToJustifyAlignment() {
  $.myLabel.applyProperties({ textAlign: 'justify' })
}

function changeColor() {
  $.myLabel.applyProperties({ color: 'red' }) // or: '#ff0', '#ff0000', rgba('255, 0,0 , 1.0')
}
