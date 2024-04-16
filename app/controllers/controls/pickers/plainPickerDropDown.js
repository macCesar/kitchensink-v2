function onPickerValueChanged(event) {
  $.valueLabel.applyProperties({
    text: `${L('selected_')} ${event.row.title}`
  })
}
