function onSwipe(event) {
  $.lbl_swipe_event.applyProperties({ text: `${L('swipe__direction')} ${event.direction}` })
}

function onTouchstart(event) {
  $.lbl_touch_event.applyProperties({ text: `${L('touch_start_')} x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onTouchend(event) {
  $.lbl_touch_event.applyProperties({ text: `${L('touch_end_')} x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onTouchmove(event) {
  $.lbl_touch_move_event.applyProperties({ text: `${L('touch_move_')} x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onClick(event) {
  $.lbl_click_event.applyProperties({ text: `${L('click_')} x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onSingleTap(event) {
  $.lbl_tap_event.applyProperties({ text: `${L('single_tap_')} x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onDbltap(event) {
  $.lbl_tap_event.applyProperties({ text: `${L('double_tap_')} x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}

function onDblclick(event) {
  $.lbl_click_event.applyProperties({ text: `${L('double_click_')} x=${Math.round(event.x)}, y=${Math.round(event.y)}` })
}
