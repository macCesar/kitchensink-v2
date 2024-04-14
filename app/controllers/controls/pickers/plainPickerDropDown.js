function onPickerValueChanged(event) {
  $.valueLabel.text = `Selected: ${event.row.title}`
}
