import Identity from 'ti.identity'

function handleOpen() {
  // Use passcode/pin-number as a fallback in case device doesn't support TouchID/FaceID.
  Identity.authenticationPolicy = Identity.AUTHENTICATION_POLICY_PASSCODE

  // Do not continue if device does not support authentication.
  if (!Identity.isSupported()) {
    return
  }

  // On iOS, we know ahead of time which authentication policy is available to us. Show it on button.
  if (OS_IOS) {
    let authPhrase = ''
    if (Identity.biometryType === Identity.BIOMETRY_TYPE_FACE_ID) {
      authPhrase = L('face_id')
    } else if (Identity.biometryType === Identity.BIOMETRY_TYPE_TOUCH_ID) {
      authPhrase = L('touch_id')
    } else {
      authPhrase = L('passcode')
    }
    $.authenticate.title = `${L('authenticate_with_')} ${authPhrase}`
  }
}

function validate() {
  if (!Identity.isSupported()) {
    alert(L('biometric_authentication_is_not_supported___'))
    return
  }

  Identity.authenticate({
    reason: L('please_authenticate_to_continue'),
    fallbackTitle: '',
    callback: ({ success, error }) => {
      Identity.invalidate()
      if (!success) {
        alert(error)
      } else {
        setTimeout(() => {
          alert(L('successfully_authenticated_'))
        }, 1000)
      }
    }
  })
}
