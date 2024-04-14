function onMaskButtonClicked() {
  const dialog = Ti.UI.createOptionDialog({
    title: 'Select Mask',
    options: ['Circular', 'Circular Gradient', 'Linear Gradient', 'None'],
  })

  dialog.addEventListener('click', ({ index }) => {
    switch (index) {
      case 0:
        $.myMaskedImage.applyProperties({ mask: '/images/mask-circle.png' })
        break
      case 1:
        $.myMaskedImage.applyProperties({ mask: '/images/mask-circle-gradient.png' })
        break
      case 2:
        $.myMaskedImage.applyProperties({ mask: '/images/mask-vertical-gradient.png' })
        break
      case 3:
        $.myMaskedImage.applyProperties({ mask: null })
        break
      default:
        return
    }

    $.maskLabel.applyProperties({ text: `Mask: ${dialog.options[index]}` })
  })

  dialog.show()
}
