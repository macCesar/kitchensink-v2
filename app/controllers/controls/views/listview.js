import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}())

function fetchData() {
  // You would usually fetch your remote data here
  setTimeout(() => {
    $.refresh.endRefreshing()
    logger.log('Ti.UI.RefreshControl finished refreshing')
  }, 1000)
}

function handleListViewClick(event) {
  logger.log('Ti.UI.ListView clicked cell at index', event.sectionIndex  + ' / ' + event.itemIndex)
  if (OS_IOS) {
    this.deselectItem(event.sectionIndex, event.itemIndex)
  }
}
