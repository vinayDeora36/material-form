


import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { NativeSelect, OutlinedInput, TextField, TextareaAutosize } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  // 'fc-form-group': {
  //   backgroundColor: 'gray',
  //   marginTop:'2rem'
  // },
  // 'fc-form-group.hiderow': {
  //   backgroundColor: 'red',
  //   marginTop:'2rem'
  // },
});

const RadioButtons = forwardRef((props, ref) => {
  const [selectedValue, setSelectedValue] = useState("a");
  const classes = useStyles();
  const location_messages = useRef(null); // Initialize the ref for location_messages

  useImperativeHandle(ref, () => ({
    getValues: () => {
      return {
     location_messages: location_messages.current.value,
      };
    },
  }));

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl >
      <Grid container alignItems="center" className={`${classes['fc-form-group']}  flex items-center `}>
        <Grid item >
          <Typography variant="subtitle1" gutterBottom >
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
        <Grid container alignItems="center" spacing={2} className={classes['fc-form-group.hiderow flex  ']}>
          <Grid className= " font-semibold text-sm">
            <Typography variant="subtitle1" gutterBottom className="pl-4 ">
              Infowindow Message
            </Typography>
          </Grid>
          <Grid   >
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
            />
            <Typography variant="body1" className="text-gray-500 pl-[4rem] " >
              Enter the marker infoWindow message for the location you are creating. You can enter plain text as well as HTML.
            </Typography>
          </Grid>  
        </Grid>
      ) : (
        <Grid container alignItems="center"  className={classes['fc-form-group.hiderow']}>
          <Grid item  sm={2} >
            <label htmlFor="name">Redirect Url</label>
          </Grid>
          <Grid item sm={8} className=" ">
            <TextField
              id="name"
              name="location_settings[redirect_link]"
              label="Enter the redirect url for the marker when it's clicked."
              variant="outlined"
              size="large"
              fullWidth
              className="   p-5"
            />
            <Typography variant="body1" className="text-gray-500 text-xs pl-1 pt-2" >

              Enter the redirect url here. For example, https://www.flippercode.com. Site visitors will be redirected to this url when the marker icon is clicked.
            </Typography>
          </Grid>
        </Grid>
      )}

      {selectedValue === "custom_link" ? (
        <Grid container alignItems="center" spacing={2} className={classes['fc-form-group.hiderow']}>
          <Grid item sm={2 }>
            <label htmlFor="name">Open in new tab</label>
          </Grid>
          <Grid item sm={8} >
            <FormControl  className="w-full" >
              <NativeSelect
                id="s2id_location_settings[redirect_link_window]"
                input={<OutlinedInput />}
                name="location_settings[redirect_link]"
              >
                <option aria-label="None" value="" />
                <option>YES</option>
                <option>NO</option>
              </NativeSelect>
              <Typography variant="body1"  className="text-gray-500  ">
                Open a new window tab.
              </Typography>
            </FormControl>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </FormControl>
  );
});

export default RadioButtons;
