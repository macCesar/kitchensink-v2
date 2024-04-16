function onPickerValueChanged(event) {
  const formatter = new Intl.NumberFormat(Ti.Locale.currentLocale, {
    useGrouping: true,
  })
  $.valueLabel.applyProperties({
    text: `${L('selected_duration_')}\n${formatter.format(event.countDownDuration)} ms`
  })
}
