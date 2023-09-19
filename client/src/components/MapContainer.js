import React from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../utils/queries/propertyQueries.js';
import { Link } from 'react-router-dom';

const containerStyle = {
  width: '40%',
  height: '600px',
};


const center = {
  lat: 52.4591,
  lng: -1.8637
};

function MapContainer() {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // Load from .env

    const { loading, error, data } = useQuery(GET_PROPERTIES);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  const [map, setMap] = React.useState(null);
  const [selectedProperty, setSelectedProperty]= React.useState(null);
  const [activeMarker, setActiveMarker] = React.useState(null);
  const [showInfoWindow, setInfoWindowFlag] = React.useState(true);

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
        {data?.properties.map(property => (
    <Marker
      position={{ lat: property.lat, lng: property.lng }}
       key={property.id}
       onClick={(props, marker) => {
        setSelectedProperty(property);
        setActiveMarker(marker);
       }}
    />
))}
{selectedProperty ? (
  <InfoWindow
  visible={showInfoWindow}
  marker={activeMarker}
  position={{lat: selectedProperty.lat, lng: selectedProperty.lng}}
  onCloseClick={() => {
    setSelectedProperty(null);
  }}
  ><>
    <h1>£{selectedProperty.price} For {selectedProperty.rent === true ? 'Rent' : 'Sale'}</h1>
    <h1>{selectedProperty.address}</h1>
    <h1>🛏️:{selectedProperty.beds}</h1>
    <h1>🛀:{selectedProperty.baths}</h1>
    <h1>🐾:{selectedProperty.pets === true ? 'Yes' : 'No'}</h1>
    <Link to={`/property/${selectedProperty._id}`}> More info... </Link >
    
  </>
  </InfoWindow>
) : null}
        <></>
      </GoogleMap>
  ) : <></>    
}

export default React.memo(MapContainer)