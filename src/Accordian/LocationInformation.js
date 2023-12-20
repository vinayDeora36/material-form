import React, { forwardRef, useImperativeHandle, useRef } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MapWithLocationField from "./MapWithLocationField";
import RadioButtons from "./RadioButtons";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Checkbox,
  FormControl,
  NativeSelect,
  OutlinedInput,
  Typography,
} from "@mui/material";
import FileUploadButton from "./FileUploadButton";
import { useState } from "react";
import {get_location_In_InputFields} from "../service/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const initialValue2 = {
  location_id: "",
  location_title: "",
  location_address: "",
  location_latitude: "",
  location_longitude: "",
  location_city: "",
  location_state: "",
  location_country: "",
  location_postal_code: "",
  location_settings: {
    hide_infowindow: "",
  },
  location_infowindow_default_open: "",
  location_draggable: "",
};

const useStyles = makeStyles({
  "fc-3": {
    // backgroundColor: "lightblue",
  },
  "fc-6": {
    // backgroundColor: "lightgreen",
  },
  checkbox: {
    // backgroundColor: "GrayText",
  },
  "fc-form-group": {
    // Your custom styles here for the cell
    // backgroundColor: "yellow",
    // margin: "2rem",
  },
});

const LocationInformation = forwardRef((props, ref) => {

  // const [location_id, setLocationId] = useState('');
  const [user, setUser] = useState(initialValue2);
  const classes = useStyles();
  
  
  const { id } = useParams();



  const location_title = useRef(null);
  const location_address = useRef(null);
  const location_latitude = useRef(null);
  const location_longitude = useRef(null);
  const location_city = useRef(null);
  const location_state = useRef(null);
  const location_country = useRef(null);
  const location_postal_code = useRef(null);

  useImperativeHandle(ref, () => ({
    getValues: () => {
      return {
        location_title: location_title.current.value,
        location_address: location_address.current.value,
        location_latitude: location_latitude.current.value,
        location_longitude: location_longitude.current.value,
        location_city: location_city.current.value,
        location_state: location_state.current.value,
        location_country: location_country.current.value,
        location_postal_code: location_postal_code.current.value,
      };
    },
  }));
// child to parent data transfer
  const sendDataToParent = (userData) => {
    props.onSendUserData(userData);
  };

  useEffect(() => {
    // Call the function to send 'user' data whenever 'user' state changes
    sendDataToParent(user);
  }, [user, props]);


  useEffect(() => {
  if (id) {
    getUserData2();
  }
  }, [id]);


  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  };

    // Get User Data In Input Fields and Set UserData By value={user?.location_title}:-
    const getUserData2 = async () => {
    let responce = await get_location_In_InputFields(id);
     console.log("edit responce getUsers2 LocationInformation", responce?.data?.location_obj);
    setUser(responce?.data?.location_obj);
   
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="justify-between"> 
   
        <Grid
          container
          spacing={2}
          alignItems="center"
          className={`${classes["fc-form-group"]}`}
        >
          <Grid item xs={2} className={classes["fc-3"]}>
            <label
              htmlFor="name"
              className="font-semibold"
              
            >
              Location Title
            </label>
            <Typography variant="subtitle1" component="span" color="error">
              *
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              inputRef={location_title}
              className={classes["form-control"]}
              id="name"
              name="location_title"
              label="Enter Location Title"
              variant="outlined"
              size="large"
              fullWidth
              required
              onChange={(e) => onValueChange(e)}
              value={user?.location_title}
            />
          </Grid>
        </Grid>
    
      <Grid
        container
        spacing={2}
        alignItems="center"
        className={`${classes["fc-form-group"]} space-y-4`}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold "

          >
            Location Address{" "}
          </label>
          <Typography variant="subtitle1" component="span" color="error">
            *
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            inputRef={location_address}
            id="name"
            className={` ${classes["form-control wpgmp_auto_suggest pac-target-input"]} `
             
            }
            name="location_address"
            label="Enter Location Address"
            variant="outlined"
            size="large"
            fullWidth
            // sx={{ marginTop: "10px" }}
            required
            onChange={(e) => onValueChange(e)}
            value={user?.location_address}
          />
          <Typography
            variant="body1"
        className="text-gray-500 "
          >
            Enter the location address here. Google auto suggest helps you to
            choose one.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        spacing={2}
        className={`${classes["fc-form-group"]} space-y-4`}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold"

          >
            Latitude and Longitude{" "}
          </label>
          <Typography variant="subtitle1" component="span" color="error">
            *
          </Typography>
        </Grid>
        <Grid item xs={4} className=" ">
          <TextField
            inputRef={location_latitude}
            
            className={`${classes["fc-3"]} `}
            id="googlemap_latitude"
            name="location_latitude"
            label="Latitude"
            variant="outlined"
            size="small"
            fullWidth
            required
            onChange={(e) => onValueChange(e)}
            value={user?.location_latitude}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            inputRef={location_longitude}
            className={classes["fc-3"]}
            id="googlemap_longitude"
            name="location_longitude"
            label="Longitude"
            variant="outlined"
            size="small"
            fullWidth
            required
            onChange={(e) => onValueChange(e)}
            value={user?.location_longitude}
          />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        spacing={2}
        className={`${classes["fc-form-group"]} space-y-4`}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold"

          >
            City & State{" "}
          </label>
        </Grid>
        <Grid item xs={4}>
          <TextField
            inputRef={location_city}
            className={classes["fc-3"]}
            id="googlemap_city"
            name="location_city"
            label="City"
            variant="outlined"
            size="small"
            fullWidth
            // sx={{ marginTop: "10px" }}
            onChange={(e) => onValueChange(e)}
            value={user?.location_city}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            inputRef={location_state}
            className={classes["fc-3"]}
            id="googlemap_state"
            name="location_state"
            label="State"
            variant="outlined"
            size="small"
            fullWidth
            // sx={{ marginTop: "10px" }}
            onChange={(e) => onValueChange(e)}
            value={user?.location_state}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        spacing={2}
        className={`${classes["fc-form-group"]} space-y-4`}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold"

          >
            Country & Postal Code{" "}
          </label>
        </Grid>
        <Grid item xs={4}>
          <TextField
            inputRef={location_country}
            className={classes["fc-3"]}
            id="googlemap_country"
            name="location_country"
            label="Country"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => onValueChange(e)}
            value={user?.location_country}
          />
        </Grid>

        <Grid item md={4}>
          <TextField
            inputRef={location_postal_code}
            className={classes["fc-3"]}
            id="googlemap_postal_code"
            name="location_postal_code"
            label="Postal Code "
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => onValueChange(e)}
            value={user?.location_postal_code}
          />
        </Grid>
      </Grid>
      <MapWithLocationField />
      <RadioButtons />

      <Grid
        container
        spacing={2}
        alignItems="center"
        className={classes["fc-form-group"]}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold"

          >
            Location Image
          </label>
        </Grid>

        <FileUploadButton />
      </Grid>

      <Grid
        container
        spacing={2}
        alignItems="center"
        className={classes["fc-form-group"]}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold text-sm"

          >
            Disable Infowindow
          </label>
        </Grid>
        <Grid
          item
          className={`${classes.checkbox} flex items-center`} 
        >
          <Checkbox
            name="location_settings[hide_infowindow]"
            value={false}
            id="location_settings"
            {...label}
          />

          <Typography
            variant="body1"
        
          >
            Do you want to disable infowindow for this location?
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
        className={classes["fc-form-group"]}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold text-sm"

          >
            Infowindow Default Open
          </label>
        </Grid>
        <Grid
          item
       
          className={`${classes.checkbox} flex items-center`} 
        >
          <Checkbox
            value={true}
            name="location_infowindow_default_open"
            id="location_infowindow_default_open"
            {...label}
          />

          <Typography
            variant="body1"
           
          >
            Check to enable infowindow default open.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
        className={classes["fc-form-group"]}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label
            htmlFor="name"
            className="font-semibold text-sm"

          >
            Marker Draggable
          </label>
        </Grid>
        <Grid
          item
          className={`${classes.checkbox} flex items-center`} 
        >
          <Checkbox
            name="location_draggable"
            id="location_draggable"
            value={true}
            {...label}
          />

          <Typography
            variant="body1"
          >
            Check if you want to allow visitors to drag the marker.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ minWidth: 120 }}>
        <Grid
          className={classes["fc-form-group"]}
          container
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
           <Grid item xs={2}  className={classes["fc-3"]}>
            <label
              htmlFor="name"
             className="font-semibold"
            >
              Marker Animation
            </label>
          </Grid>
          <Grid item >
            <FormControl sx={{ m: 1 }} variant="outlined " className="w-[50rem] pl-[-2rem]">
              <NativeSelect
                // value={selectedAnimation}
                // onChange={handleAnimationChange}
                input={<OutlinedInput />}
                label="please Select"
                id="select2-chosen-2"
          
              >
                <option aria-label="please Select" value="" />
                <option value="BOUNCE">BOUNCE</option>
                <option value="DROP">DROP</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default LocationInformation;
