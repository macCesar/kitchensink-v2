import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function sayHello({ source }) {
  alert(`${L('hello_from')} ${source.title}`)
  logger.log(`Ti.UI.Toolbar selected button with title: ${source.title}`)
}
