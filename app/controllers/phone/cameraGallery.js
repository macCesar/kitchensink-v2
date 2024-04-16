import { logger } from 'logger';

/**
* The scoped constructor of the controller.
**/
(function constructor() {

}())

function openComponent(event) {
  const action = event.itemId

  switch (action) {
    case 'showCameraPhoto':
      showCamera([Ti.Media.MEDIA_TYPE_PHOTO])
      break
    case 'showCameraVideo':
      showCamera([Ti.Media.MEDIA_TYPE_VIDEO])
      break
    case 'showCameraPhotoVideo':
      showCamera([Ti.Media.MEDIA_TYPE_PHOTO, Ti.Media.MEDIA_TYPE_VIDEO])
      break
    case 'saveToGallery':
      saveToGallery()
      break
    case 'openFromGallery':
      openFromGallery()
      break
    default:
      logger.log('Ti.Media', `Unknown action selected: ${action}`)
      break
  }

  if (OS_IOS) {
    event.source.deselectItem(event.sectionIndex, event.itemIndex)
  }
}

function showCamera(mediaTypes) {
  require('../../../../../../../../permissions').checkCameraPermission(success => {
    if (!success) {
      alert(L('no_permissions_'))
      return
    }
    Ti.Media.showCamera({
      mediaTypes: mediaTypes,
      success: ({ media }) => {
        logger.log('Ti.Media', 'Image taken successfully!')
        processImage(media)
      },
      error: ({ error }) => {
        logger.log('Ti.Media', `Error showing camera: ${error}`)
      },
      cancel: () => {
        logger.log('Ti.Media', 'Camera was cancelled')
      }
    })
  })
}

function processImage(image) {
  const imageView = Ti.UI.createImageView({
    opacity: 0,
    image: image,
    autorotate: true,
  })

  const label = Ti.UI.createLabel({
    text: L('tap_to_close')
  })

  imageView.addEventListener('click', () => {
    imageView.animate({
      opacity: 0
    }, () => {
      $.window.remove(imageView)
    })
  })

  if (OS_IOS) {
    imageView.add(label)
  }
  $.window.add(imageView)

  imageView.animate({
    opacity: 1
  })
}

function saveToGallery() {
  const view = Ti.UI.createView({
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'red'
  })

  // Convert the view to an image-blog and save it to your Gallery
  Ti.Media.saveToPhotoGallery(view.toImage(), {
    success: () => {
      logger.log('Ti.Media', 'Image saved to photo-gallery successfully!')
    },
    error: ({ error }) => {
      logger.log('Ti.Media', `Error saving image to photo-gallery: ${error}`)
    }
  })
}

function openFromGallery() {
  require('../../../../../../../../permissions').checkCameraPermission(success => {
    if (!success) {
      alert(L('no_permissions_'))
      return
    }

    Ti.Media.openPhotoGallery({
      success: ({ media }) => {
        logger.log('Ti.Media', 'Image open successfully!')
        processImage(media)
      },
      error: ({ error }) => {
        logger.log('Ti.Media', `Error opening image: ${error}`)
      },
      cancel: () => {
        logger.log('Ti.Media', 'Opening photo-gallery was cancelled')
      }
    })
  })
}
