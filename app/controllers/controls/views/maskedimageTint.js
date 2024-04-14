function onColorOptionBarClicked({ index }) {
  switch (index) {
    case 0:
      $.myMaskedImage.applyProperties({ tint: 'red' })
      break
    case 1:
      $.myMaskedImage.applyProperties({ tint: 'green' })
      break
    case 2:
      $.myMaskedImage.applyProperties({ tint: 'blue' })
      break
    case 3:
      $.myMaskedImage.applyProperties({ tint: 'black' })
      break
  }
}
