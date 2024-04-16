function onPickerValueChanged() {
  const dateString = $.datePicker.value.toLocaleDateString()
  $.valueLabel.applyProperties({
    text: `${L('selected_date_')}\n${dateString}`
  })
}
