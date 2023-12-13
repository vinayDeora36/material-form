import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const MapWithLocationField = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, (error) => {
        console.error('Error getting the current location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <Grid container >
      <Grid item md={2}>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: 'black' }} sx={{ marginTop: '10px' }}>
          Current Location
        </Typography> 
      </Grid>
      <Grid item md={8}  sx={{ marginTop: '15px' }} >
        {currentLocation && (
          <iframe
            title="Map"
            width="100%"
            height="300"
            frameBorder="0"
            src={`https://maps.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}&output=embed`}
            allowFullScreen
          ></iframe>
        )}
      </Grid>
    </Grid>
  );
};

export default MapWithLocationField;
