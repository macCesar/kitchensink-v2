function onMaskButtonClicked() {
  const dialog = Ti.UI.createOptionDialog({
    title: L('select_mask'),
    options: [L('circular'), L('circular_gradient'), L('linear_gradient'), L('none')],
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

    $.maskLabel.applyProperties({ text: `${L('mask_')} ${dialog.options[index]}` })
  })

  dialog.show()
}
