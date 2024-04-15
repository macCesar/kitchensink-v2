import { logger } from 'logger'

let colors
let Gradient
let gradientTypes
let selectedGradient
let normalizedCenterX
let normalizedCenterY;

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
  normalizedCenterX = 0.5
  normalizedCenterY = 0.5
  colors = ['red', 'blue']
  Gradient = { RADIAL: 0, LINEAR: 1 }
  gradientTypes = ['radial', 'linear']
  selectedGradient = Gradient.RADIAL
}())

function updateGradient() {
  const size = $.gradientView.rect
  const minDimension = Math.min(size.width, size.height)
  const centerPoint = {
    x: size.width * normalizedCenterX,
    y: size.height * normalizedCenterY,
  }

  const gradient = {
    type: gradientTypes[selectedGradient],
    colors: selectedGradient === Gradient.LINEAR
      ? [{ color: colors[0], offset: 0.0 }, { color: colors[1], offset: 1.0 }]
      : colors,
  }

  if (selectedGradient === Gradient.LINEAR) {
    updateLinearGradient(gradient)
  } else {
    updateRadialGradient(gradient, centerPoint, minDimension)
  }

  $.gradientView.applyProperties({ backgroundGradient: gradient })
}

function updateLinearGradient(gradient) {
  const startPoint = { x: precisionRound($.startRadiusSlider.value, -1) + '%', y: '50%' }
  const endPoint = { x: precisionRound($.endRadiusSlider.value, -1) + '%', y: '50%' }

  Object.assign(gradient, { startPoint, endPoint })

  logger.log(`Linear gradient updated: start-point: ${JSON.stringify(startPoint)}, end-point: ${JSON.stringify(endPoint)}`)
}

function updateRadialGradient(gradient, centerPoint, minDimension) {
  const startRadius = (minDimension / 2) * ($.startRadiusSlider.value / 100)
  const endRadius = (minDimension / 2) * ($.endRadiusSlider.value / 100)

  Object.assign(gradient, {
    startPoint: centerPoint,
    endPoint: centerPoint,
    startRadius: startRadius,
    endRadius: endRadius,
    backfillStart: $.startFillSwitch.value,
    backfillEnd: $.endFillSwitch.value
  })

  logger.log(`Radial gradient updated: ${JSON.stringify(centerPoint)}, start-radius: ${startRadius}, end-radius: ${endRadius}`)
}

function handleTouchMove(event) {
  const { width, height } = $.gradientView.rect

  normalizedCenterX = width > 0 ? event.x / width : 0.5
  normalizedCenterY = height > 0 ? event.y / height : 0.5

  updateGradient()
}

function pickRandomColor() {
  colors = [generateRandomColor(), generateRandomColor()]
  updateGradient()
}

// CREDITS: https://stackoverflow.com/a/1484514/5537752
function generateRandomColor() {
  return '#' + Array.from({ length: 6 }, () => Math.floor(Math.random() * 16).toString(16)).join('')
}

function handleGradientType({ index }) {
  selectedGradient = index
  const isLinear = (index === Gradient.LINEAR)

  $.startFillSwitch.applyProperties({ enabled: !isLinear })
  $.endFillSwitch.applyProperties({ enabled: !isLinear })

  $.startRadiusLabel.applyProperties({ text: isLinear ? 'Start Point:' : 'Start Radius:' })
  $.endRadiusLabel.applyProperties({ text: isLinear ? 'End Point' : 'End Radius' })

  updateGradient()
}

function precisionRound(number, precision) {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}
