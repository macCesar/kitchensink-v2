function onPickerValueChanged() {
  const timeString = $.timePicker.value.toLocaleTimeString()
  $.valueLabel.applyProperties({
    text: `${L('selected_time_', 'Selected Time:')}\n${timeString}`
  })
}
