function onPickerValueChanged() {
  const dateString = $.datePicker.value.toLocaleString()
  $.valueLabel.applyProperties({
    text: `${L('selected_date_and_time_')}\n${dateString}`
  })
}
