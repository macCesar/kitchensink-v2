let record
let audioRecorder
let currentSessionCategory = Ti.Media.audioSessionCategory;

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
  audioRecorder = Ti.Media.createAudioRecorder()

  if (OS_IOS) {
    audioRecorder.applyProperties({
      format: Ti.Media.AUDIO_FILEFORMAT_WAVE,
      compression: Ti.Media.AUDIO_FORMAT_ULAW
    })

    Ti.Media.applyProperties({ audioSessionCategory: Ti.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD })
  }
}())

function onOpen() {
  if (!Ti.Media.hasAudioRecorderPermissions()) {
    Ti.Media.requestAudioRecorderPermissions(event => {
      if (event.success) {
        $.startRecordingButton.applyProperties({ visible: true })
      } else {
        Ti.API.error('Error: Unable to request audio recorder permissions:')
        Ti.API.error(event)
      }
    })
  } else {
    $.startRecordingButton.applyProperties({ visible: true })
  }
}

function onClose() {
  Ti.Media.applyProperties({ audioSessionCategory: currentSessionCategory })
}

function startRecording() {
  audioRecorder.start()

  $.startRecordingButton.applyProperties({ visible: false })
  $.pauseRecordingButton.applyProperties({ visible: true })
  $.stopRecordingButton.applyProperties({ visible: true })
}

function pauseRecording() {
  if (audioRecorder.paused) {
    $.pauseRecordingButton.applyProperties({ title: L('pause') })
    audioRecorder.resume()
  } else {
    $.pauseRecordingButton.applyProperties({ title: L('resume') })
    audioRecorder.pause()
  }
}

function stopRecording() {
  record = audioRecorder.stop()

  $.startRecordingButton.applyProperties({ visible: true })
  $.playRecordingButton.applyProperties({ visible: true })
  $.pauseRecordingButton.applyProperties({ visible: false })
  $.stopRecordingButton.applyProperties({ visible: false })
}

function playRecording() {
  const audioPlayer = Ti.Media.createAudioPlayer({
    url: record.nativePath
  })
  audioPlayer.start()
}
