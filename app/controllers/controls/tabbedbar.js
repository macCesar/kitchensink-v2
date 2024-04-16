import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function tabbedBarSelectedIndex({ index }) {
  const message = `${L('ti_ui_tabbedBar_changed_to_index_')} ${index}`

  alert(message)
  logger.log(message)
}
