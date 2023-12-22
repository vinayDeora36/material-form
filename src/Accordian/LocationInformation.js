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
  MenuItem,
  NativeSelect,
  OutlinedInput,
  Select,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import FileUploadButton from "./FileUploadButton";
import { useState } from "react";
import { get_location_In_InputFields } from "../service/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Radio from "@mui/material/Radio";
// import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";

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
  location_messages: "",
  location_draggable: "",
  selectedValueRef: "",
  hide_infowindow: "",
  location_settings: {

    redirectLinkRef: "",
    s2id_location_settings:"",
  },
  location_infowindow_default_open: false,
  location_draggable: false,
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
  const { id } = useParams();

  const [user, setUser] = useState(initialValue2);
  const [selectedValue, setSelectedValue] = useState("marker");
  // const [infowindowDefaultOpen, setInfowindowDefaultOpen] = useState(true);

  const classes = useStyles();

  const location_title = useRef(null);
  const location_address = useRef(null);
  const location_latitude = useRef(null);
  const location_longitude = useRef(null);
  const location_city = useRef(null);
  const location_state = useRef(null);
  const location_country = useRef(null);
  const location_postal_code = useRef(null);
  const location_messages = useRef(null);
  const location_infowindow_default_open = useRef(null);
  const location_draggable = useRef(null);
  const hide_infowindow = useRef();
  const redirectLinkRef = useRef(null);
  const selectedValueRef = useRef(null);
const s2id_location_settings = useRef(null)
  useImperativeHandle(ref, () => ({
    getValues: () => {
      return {
        selectedValueRef: selectedValueRef?.current?.value,
        location_title: location_title.current.value,
        location_address: location_address.current.value,
        location_latitude: location_latitude.current.value,
        location_longitude: location_longitude.current.value,
        location_city: location_city.current.value,
        location_state: location_state.current.value,
        location_country: location_country.current.value,
        location_postal_code: location_postal_code.current.value,
        location_messages: location_messages?.current?.value,
        location_infowindow_default_open: location_infowindow_default_open.current.checked,
        location_draggable: location_draggable.current.checked,
        hide_infowindow: hide_infowindow.current.checked ,
        location_settings: {
          
          redirectLinkRef :redirectLinkRef?.current?.value,
          s2id_location_settings: s2id_location_settings?.current?.value,
        },
        
      };
    },
  }));

  // child to parent data transfer code
  const sendDataToParent = (userData) => {
    props.onSendUserData(userData);
  };

  useEffect(() => {
    // Call the function to send 'user' data whenever 'user' state changes
    sendDataToParent(user);
  }, [user, props]);

  useEffect(() => {
    if (id) {
      getAllLocationDetails();
    }
  }, [id]);

   // Get User Data In Input Fields and Set UserData By value={user?.location_title}:-
   const getAllLocationDetails = async () => {
    let responce = await get_location_In_InputFields(id);
    console.log(
      "edit responce getAllLocationDetails LocationInformation",
      responce?.data?.location_obj
      );
      console.log("sirf responce ",responce)
    setUser(responce?.data?.location_obj);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }; 



  const onValueChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setUser({ ...user, [name]: checked });
    } else {
      if (name && name.includes && name.includes("location_settings")) {
        const [parent, field] = name.split(".");
        setUser({
          ...user,
          [parent]: { ...user[parent], [field]: value },
        });
      } else {
        setUser({ ...user, [name]: value });
      }
    }
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
          <label htmlFor="name" className="font-semibold">
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
          <label htmlFor="name" className="font-semibold ">
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
            className={` ${classes["form-control wpgmp_auto_suggest pac-target-input"]} `}
            name="location_address"
            label="Enter Location Address"
            variant="outlined"
            size="large"
            fullWidth
            required
            onChange={(e) => onValueChange(e)}
            value={user?.location_address}
          />
          <Typography variant="body1" className="text-gray-500 ">
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
          <label htmlFor="name" className="font-semibold">
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
          <label htmlFor="name" className="font-semibold">
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
          <label htmlFor="name" className="font-semibold">
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

      {/* <RadioButtons/> */}

      <FormControl>
        <Grid
          container
          alignItems="center"
          className={`${classes["fc-form-group"]}  flex items-center `}
        >
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              On Click
            </Typography>
          </Grid>
          <Grid className="ml-36 flex items-center space-x-4 my-4">
            <RadioGroup
              row
              aria-label="radio-buttons-group"
              name="radio-buttons-group"
              value={selectedValue}
              onChange={handleChange}
            >
              <FormControlLabel
                value="marker"
                name="location_settings[onclick]"
                control={<Radio />}
                label="Display Infowindow"
              />
              <FormControlLabel
                value="custom_link"
                name="location_settings[onclick]"
                control={<Radio />}
                label="Redirect"
              />
            </RadioGroup>
          </Grid>
        </Grid>
        {selectedValue === "marker" ? (
          <Grid
            container
            alignItems="center"
            spacing={2}
            className={classes["fc-form-group.hiderow flex  "]}
          >
            <Grid className=" font-semibold text-sm">
              <Typography variant="subtitle1" gutterBottom className="pl-4 ">
                Infowindow Message
              </Typography>
            </Grid>
            <Grid>
              <TextareaAutosize
                inputRef={location_messages} // Connect the ref to the TextareaAutosize component
                id="googlemap_infomessage"
                name="location_messages"
                label="Enter the marker infoWindow message for the location you are creating."
                multiline
                rows={6}
                variant="outlined"
                className="w-full ml-[4rem] border p-2 rounded-md"
                fullWidth
                onChange={(e) => onValueChange(e)}
                value={user?.location_messages}
              />
              <Typography variant="body1" className="text-gray-500 pl-[4rem] ">
                Enter the marker infoWindow message for the location you are
                creating. You can enter plain text as well as HTML.
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            alignItems="center"
            className={classes["fc-form-group.hiderow"]}
          >
            <Grid item sm={2}>
              <label htmlFor="name">Redirect Url</label>
            </Grid>
            <Grid item sm={8} className=" ">
            <TextField
            inputRef={redirectLinkRef}
            id="redirect_link"
            name="location_settings.redirect_link"
            label="Redirect Link"
            variant="outlined"
            size="large"
            fullWidth
            className="p-5"
            onChange={(e) => onValueChange(e)}
            value={user?.location_settings?.redirect_link || ""}
          />
              <Typography
                variant="body1"
                className="text-gray-500 text-xs pl-1 pt-2"
              >
                Enter the redirect url here. For example,
                https://www.flippercode.com. Site visitors will be redirected to
                this url when the marker icon is clicked.
              </Typography>
            </Grid>
          </Grid>
        )}

        {selectedValue === "custom_link" ? (
          <Grid
            container
            alignItems="center"
            spacing={2}
            className={classes["fc-form-group.hiderow"]}
          >
            <Grid item sm={2}>
              <label htmlFor="name">Open in new tab</label>
            </Grid>
            <Grid item sm={8}>
            <FormControl className="w-full">
        <Select
          input={<OutlinedInput />}
          inputRef={s2id_location_settings}
          label="Open a new window tab"
          className="w-full"
          defaultValue={user?.location_settings?.s2id_location_settings}
          onChange={(e) => onValueChange(e)}
        
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="YES">YES</MenuItem>
          <MenuItem value="NO">NO</MenuItem>
        </Select>
        <Typography variant="body1" className="text-gray-500">
          Open a new window tab.
        </Typography>
      </FormControl>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </FormControl>

      <Grid
        container
        spacing={2}
        alignItems="center"
        className={classes["fc-form-group"]}
      >
        <Grid item xs={2} className={classes["fc-3"]}>
          <label htmlFor="name" className="font-semibold">
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
          <label htmlFor="name" className="font-semibold text-sm">
            Disable Infowindow
          </label>
        </Grid>
        <Grid item className={`${classes.checkbox} flex items-center`}>
          <Checkbox
            inputRef={hide_infowindow}
            name="hide_infowindow"
            id="location_settings_hide_infowindow"
            checked={user?.hide_infowindow }
            onChange={(e) => onValueChange(e)}
            value={false}
            {...label}
          />

          <Typography variant="body1">
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
          <label htmlFor="name" className="font-semibold text-sm">
            Infowindow Default Open
          </label>
        </Grid>
        <Grid item className={`${classes.checkbox} flex items-center`}>
          <Checkbox
            inputRef={location_infowindow_default_open}
            name="location_infowindow_default_open"
            checked={user?.location_infowindow_default_open}
            onChange={(e) => onValueChange(e)}
            value={true}
            {...label}
          />
          <Typography variant="body1">
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
          <label htmlFor="name" className="font-semibold text-sm">
            Marker Draggable
          </label>
        </Grid>
        <Grid item className={`${classes.checkbox} flex items-center`}>
          <Checkbox
            inputRef={location_draggable}
            name="location_draggable"
            id="location_draggable"
            checked={user?.location_draggable}
            onChange={(e) => onValueChange(e)}
            {...label}
          />

          <Typography variant="body1">
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
          <Grid item xs={2} className={classes["fc-3"]}>
            <label htmlFor="name" className="font-semibold">
              Marker Animation
            </label>
          </Grid>
          <Grid item>
          <FormControl sx={{ m: 1 }} variant="outlined" className="w-[50rem] pl-[-2rem]">
        <Select
          input={<OutlinedInput />}
          inputRef={selectedValueRef}
          label="please Select"
          id="select2-chosen-2"
    
          defaultValue={user?.selectedValueRef}
          // onChange={(e) => onValueChange(e)}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="BOUNCE">BOUNCE</MenuItem>
          <MenuItem value="DROP">DROP</MenuItem>
        </Select>
      </FormControl>

          </Grid>
        </Grid>
      </Box>
    </div>
  );
});

export default LocationInformation;
