import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

export const MapContainer = (props) => {
  const { google } = props;
  const settings = {
    centerAroundCurrentLocation: true
  };

  return (
    <Map google={google} {...settings}/>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR'
})(MapContainer);