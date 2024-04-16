import Map from 'ti.map'
import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {
  Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH
  Ti.Geolocation.distanceFilter = 10

  // Check for Google Play Services. In order to view maps, Google Play services needs to be installed on the device
  if (OS_ANDROID) {
    Ti.Geolocation.preferredProvider = Ti.Geolocation.Android.PROVIDER_GPS
    const rc = Map.isGooglePlayServicesAvailable()
    switch (rc) {
      case Map.SUCCESS:
        Ti.API.info('Google Play services is installed.')
        break
      case Map.SERVICE_MISSING:
        alert(L('google_play_services_is_missing___'))
        break
      case Map.SERVICE_VERSION_UPDATE_REQUIRED:
        alert(L('google_play_services_is_out_of_date___'))
        break
      case Map.SERVICE_DISABLED:
        alert(L('google_play_services_is_disabled___'))
        break
      case Map.SERVICE_INVALID:
        alert(L('google_play_services_cannot_be_authenticated___'))
        break
      default:
        alert(L('unknown_error'))
    }
  }

  // Checks for location service available
  if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE, (event) => {
      console.log(event)
      if (!event.success) {
        alert(`Error granting location permissions: ${event.error}`)
        return
      }

      getCurrentPosition()
    })

    Ti.Geolocation.addEventListener('location', updatePosition)
  } else {
    Ti.API.error('Your device has GPS turned off. Please turn it on.')
  }
}())

function updatePosition(event) {
  if (!event.success || event.error) {
    Ti.API.debug(JSON.stringify(event))
    Ti.API.debug(event)
    return
  }

  const geoPackage = JSON.stringify(event),
    latitude = event.coords.latitude,
    longitude = event.coords.longitude

  $.geoloc.value = geoPackage
  $.geo_lat.text = `Latitude: ${latitude}`
  $.geo_long.text = `Longitude: ${longitude}`

  logger.log('Ti.Geolocation', 'location:', geoPackage)
}

function getCurrentPosition() {
  Ti.Geolocation.getCurrentPosition((event) => {
    if (!event.success || event.error) {
      Ti.API.debug(JSON.stringify(event))
      Ti.API.debug(event)
      alert('Error getting current position')
      return
    }
    const latitude = event.coords.latitude,
      longitude = event.coords.longitude

    const mapview = Map.createView({
      userLocation: true,
      mapType: Map.NORMAL_TYPE,
      animate: true,
      region: {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      regionFit: true,
    })

    $.map.add(mapview)

    // Handle click events on any annotations on this map.
    mapview.addEventListener('click', (event) => {
      Ti.API.info(`Clicked ${event.clicksource} on ${event.latitude}, ${event.longitude}`)
    })
  })
}
