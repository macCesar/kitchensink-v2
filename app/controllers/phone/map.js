import { logger } from 'logger'

function handleMapClick(event) {
  let clickedAnnotation = null

  // check if annotation was clicked
  if (event.hasOwnProperty('annotation')) {

    // check if the annotation was selected or deselected based on previous state
    if (event.annotation.id === clickedAnnotation) {
      logger.log('annotation deselected', event.annotation)
      clickedAnnotation = null
    } else {
      logger.log('annotation selected', event.annotation)
      clickedAnnotation = event.annotation.id
    }
  } else if (event.clicksource === 'circle') {
    logger.log('circle clicked', event.latitude, event.longitude)
  }
}

/* Right now Alloy doesn't add circles/polylines/polygons to map properly when they're created in Alloy
 * See https://jira-archive.titaniumsdk.com/ALOY/ALOY-1608
 * For now, either create them in the controller or add them manually
 */
$.mapview.addCircle($.mapCircle)
$.mapview.addPolylines([$.mapLineOne, $.mapLineTwo, $.mapLineThree])
$.mapview.addPolygon($.mapPolygon)
