import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  // 'fc-3': {
  //   backgroundColor: 'lightblue',

  // },

  // 'form-control': {
  //   backgroundColor: 'red',

  // },
  // 'fc-form-group': {
  //   // Your custom styles here for the cell
  //   backgroundColor: 'green',
  //   marginTop:'2rem'
  //   // Add more styles as needed
  // },
});
const MapWithLocationField = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const classes = useStyles();
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
    <Grid container className={classes['fc-form-group']} >
      <Grid item md={2} className={classes['fc-3']}>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: 'black' }} sx={{ marginTop: '10px' }}>
          Current Location
        </Typography>   
      </Grid>
      <Grid item md={8}  sx={{ marginTop: '15px' }}  className={classes['form-control']} >
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
