function onScaleOptionBarClicked({ index }) {
  switch (index) {
    case 0: // Fill
      $.myImage.applyProperties({
        scalingMode: Ti.Media.IMAGE_SCALING_NONE
      })
      break
    case 1: // None
      $.myImage.applyProperties({
        scalingMode: Ti.Media.IMAGE_SCALING_FILL
      })
      break
    case 2: // Aspect Fill
      $.myImage.applyProperties({
        scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FILL
      })
      break
    case 3: // Aspect Fit
      $.myImage.applyProperties({
        scalingMode: Ti.Media.IMAGE_SCALING_ASPECT_FIT
      })
      break
  }
}
