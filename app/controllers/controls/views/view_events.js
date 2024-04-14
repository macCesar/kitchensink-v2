function onSwipe(event) {
  $.lbl_swipe_event.applyProperties({ text: `Swipe: direction ${event.direction}` })
}

function onTouchstart(event) {
  $.lbl_touch_event.applyProperties({ text: `Touch (start): x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onTouchend(event) {
  $.lbl_touch_event.applyProperties({ text: `Touch (end): x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onTouchmove(event) {
  $.lbl_touch_move_event.applyProperties({ text: `Touch (move): x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onClick(event) {
  $.lbl_click_event.applyProperties({ text: `Click: x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onSingleTap(event) {
  $.lbl_tap_event.applyProperties({ text: `Single tap: x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onDbltap(event) {
  $.lbl_tap_event.applyProperties({ text: `Double tap: x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onDblclick(event) {
  $.lbl_click_event.applyProperties({ text: `Double click: x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}
