function getNameFromOrientationId(orientationId) {
  switch (orientationId) {
    case Ti.UI.PORTRAIT:
      return L('portrait_upright')
    case Ti.UI.UPSIDE_PORTRAIT:
      return L('portrait_upside_down')
    case Ti.UI.LANDSCAPE_LEFT:
      return L('landscape_left')
    case Ti.UI.LANDSCAPE_RIGHT:
      return L('landscape_right')
    case Ti.UI.FACE_UP:
      return L('face_up')
    case Ti.UI.FACE_DOWN:
      return L('face_down')
  }
  return L('unknown')
}

// Called when the device orientation changes. (This is not the window's orientation.)
function onOrientationChanged({ orientation }) {
  $.orientationLabel.applyProperties({ text: `${L('device_orientation_')}\n${getNameFromOrientationId(orientation)}` })
}

// Called when the device has been shaked.
function onShake() {
  $.shakeLabel.opacity = 1
  $.shakeLabel.animate(Ti.UI.createAnimation({
    opacity: 0,
    duration: 2000
  }))
}

// Resume listening when the app has returned to the foreground from the background.
function onAppResumed() {
  Ti.Gesture.addEventListener('orientationchange', onOrientationChanged)
  Ti.Gesture.addEventListener('shake', onOrientationChanged)
}

// Stop listening when the app has been backgrounded.
function onAppPaused() {
  Ti.Gesture.removeEventListener('orientationchange', onOrientationChanged)
  Ti.Gesture.removeEventListener('shake', onOrientationChanged)
}

// Start listening when this window opens.
function onWindowOpen() {
  onOrientationChanged({ orientation: Ti.Gesture.orientation })
  Ti.Gesture.addEventListener('orientationchange', onOrientationChanged)
  Ti.Gesture.addEventListener('shake', onShake)
  Ti.App.addEventListener('resumed', onAppResumed)
  Ti.App.addEventListener('paused', onAppPaused)
}

// Stop listening when this window closes.
function onWindowClose() {
  Ti.Gesture.removeEventListener('orientationchange', onOrientationChanged)
  Ti.Gesture.removeEventListener('shake', onShake)
  Ti.App.removeEventListener('resumed', onAppResumed)
  Ti.App.removeEventListener('paused', onAppPaused)
}
