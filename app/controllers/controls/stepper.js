import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function stepperValueChanged({ value }) {
  $.state.applyProperties({ text: `${L('the_stepper_value_changed_to')} ${value}` })
  logger.log(`Ti.UI.Stepper value changed to ${value}`)
}
