function onPickerValueChanged(event) {
  $.state.applyProperties({
    text: `${L('selected')}  ${event.selectedValue}`
  })
}
