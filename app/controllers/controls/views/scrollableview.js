import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function scrollToView() {
  $.scrollable.scrollToView(1) // Index or view
}

function addNewView() {
  const newView = Ti.UI.createView({
    backgroundColor: 'rgba(' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 255) + ', 1.0)' // Generate rgba-color
  })

  $.scrollable.addView(newView)
  logger.log('Ti.UI.ScrollableView added new view at index ' + ($.scrollable.views.length - 1))

  validateButtons()
}

function removeLastView() {
  $.scrollable.removeView($.scrollable.views[$.scrollable.views.length - 1])
  logger.log('Ti.UI.ScrollableView deleted last view')

  validateButtons()
}

function scrollableViewDidScroll({ currentPage }) {
  logger.log('Ti.UI.ScrollableView did scroll to index ' + currentPage)
}

function validateButtons() {
  $.remove.applyProperties({ enabled: $.scrollable.views.length > 0 })
  $.scrollTo.applyProperties({ enabled: $.scrollable.views.length >= 2 })
}
