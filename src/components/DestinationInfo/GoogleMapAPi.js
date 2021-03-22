import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '440px',
  borderRadius: '10px',
};

const location = {
  lat: 23.775920, 
  lng: 90.384993
};

const onLoad = marker => {
  console.log('marker', marker);
}

const GoogleMapApi = () => {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBNhpMjP8ywC4qtYiCP5-_U5u9RBja4FQc" >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
        >
          <Marker onLoad={onLoad} position={location} />
        </GoogleMap>
      </LoadScript>
    );
};

export default GoogleMapApi