function onPickerValueChanged(event) {
  const formatter = new Intl.NumberFormat(Ti.Locale.currentLocale, {
    useGrouping: true,
  })
  $.valueLabel.text = `Selected Duration:\n${formatter.format(event.countDownDuration)} ms`
}
