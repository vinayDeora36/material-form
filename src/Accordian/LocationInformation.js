import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MapWithLocationField from "./MapWithLocationField";
import RadioButtons from "./RadioButtons";
import { Box, Button, Checkbox, FormControl, InputLabel, NativeSelect, OutlinedInput, Typography } from "@mui/material";
import FileUploadButton from "./FileUploadButton";

const LocationInformation = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
          >
            Location Title
          </label>
          <Typography variant="subtitle1" component="span" color="error">
            *
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="name"
            name="location_title"
            label="Enter Location Title"
            variant="outlined"
            size="large"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <label htmlFor="name" style={{ fontWeight: "bold", color: "black" }}>
            Location Address{" "}
          </label>
          <Typography variant="subtitle1" component="span" color="error">
            *
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="name"
            name="location_address"
            label="Enter Location Address"
            variant="outlined"
            size="large"
            fullWidth
            sx={{ marginTop: "10px" }}
            required
          />
          <Typography
            variant="body1"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              color: "gray",
            }}
          >
            Enter the location address here. Google auto suggest helps you to
            choose one.
          </Typography>
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <label htmlFor="name" style={{ fontWeight: "bold", color: "black" }}>
            Latitude and Longitude{" "}
          </label>
          <Typography variant="subtitle1" component="span" color="error">
            *
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="name"
            name="location_latitude"
            label="Latitude"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "10px" }}
            required
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="name"
            name="location_longitude"
            label="Longitude"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "10px" }}
            required
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <label htmlFor="name" style={{ fontWeight: "bold", color: "black" }}>
            City & State{" "}
          </label>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="name"
            name="location_city"
            label="City"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "10px" }}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="email"
            name="location_state"
            label="State"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "10px" }}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <label htmlFor="name" style={{ fontWeight: "bold", color: "black" }}>
            Country & Postal Code{" "}
          </label>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="name"
            name="location_country"
            label="Country"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "10px" }}
          />
        </Grid>

        <Grid item md={4}>
          <TextField
            id="email"
            name="location_postal_code"
            label="Postal Code "
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginTop: "10px" }}
          />
        </Grid>
      </Grid>
      <MapWithLocationField />
      <RadioButtons />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
          >
        Location Image 
          </label>
        </Grid>
       
        <FileUploadButton/>
      
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
          >
            Disable Infowindow
          </label>
        </Grid>
        <Grid item>
          <Checkbox name="location_settings[hide_infowindow]" {...label} />
        </Grid>
        <Typography
          variant="body1"
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            marginTop: "1rem",
          }}
        >
         Do you want to disable infowindow for this location?
        </Typography>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", color: "black", fontStyle: "inherit", fontStyle: "inherit",
            whiteSpace: "nowrap",  }}
          >
           Infowindow Default Open 
          </label>
        </Grid>
        <Grid item>
          <Checkbox name="location_infowindow_default_open" {...label} />
        </Grid>
        <Typography
          variant="body1"
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            marginTop: "1rem",
          }}
        >
          Check to enable infowindow default open.
        </Typography>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
          >
         Marker Draggable 
          </label>
        </Grid>
        <Grid item>
          <Checkbox name="location_draggable" {...label} />
        </Grid>
        <Typography
          variant="body1"
          style={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            marginTop: "1rem",
          }}
        >
          Check if you want to allow visitors to drag the marker.
        </Typography>
      </Grid>
      <Box sx={{ minWidth: 120 }}>
      <Grid container alignItems="center" justifyContent="flex-start" spacing={2}>
        <Grid item xs={12} sm={2.5}>
          <label htmlFor="name" style={{ fontWeight: "bold", color: "black" }}>
            Marker Animation
          </label>
        </Grid>
        <Grid item sm={8}>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <NativeSelect
              // value={selectedAnimation}
              // onChange={handleAnimationChange}
              input={<OutlinedInput  />}
              style={{ width: "50rem", marginTop: "1rem", marginLeft: "-3rem" }}
              id="marker-animation-select"
            >
              <option aria-label="None" value="" />
              <option value="BOUNCE">BOUNCE</option>
              <option value="DROP">DROP</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default LocationInformation;
