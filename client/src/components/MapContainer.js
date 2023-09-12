import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '300px',
};

const markers = [
  { id:1, lat: 52.4591, lng: -1.8637 },
  { id:2, lat: 52.4186, lng: -1.8467 },
  { id:3, lat: 52.5314, lng: -1.8322 },
];

const center = {
  lat: 52.4591,
  lng: -1.8637
};

function MyComponent() {
    const apiKey = process.env.GOOGLE_API_KEY; // Load from .env

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDOH5aCAqK0mJpNGMsFQQb8JAiBp6zf36A"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    const zoom = 10;
    map.setZoom(zoom);
    map.setCenter(center);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
       
      >
        {markers.map(markerz => (
    <Marker
      position={{ lat: markerz.lat, lng: markerz.lng }}
      // key={markerz.id}
    />
))}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)