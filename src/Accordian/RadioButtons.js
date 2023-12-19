// import React, { forwardRef, useImperativeHandle, useRef } from "react";
// import Radio from "@mui/material/Radio";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import RadioGroup from "@mui/material/RadioGroup";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import { NativeSelect, OutlinedInput, TextField, TextareaAutosize } from "@mui/material";
// import { useState } from "react";
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({

//   // 'fc-form-group': {
//   //   backgroundColor: 'gray',
//   //   marginTop:'2rem'
//   // },
//   // 'fc-form-group hiderow ': {
//   //   backgroundColor: 'red',
//   //   marginTop:'2rem'
//   // },
// });

// const RadioButtons=(forwardRef((props, ref) => {

//   const [selectedValue, setSelectedValue] = useState("a");
//   const classes = useStyles();





//   const location_id=useRef(null)
//   const location_title = useRef(null);
//   const location_address = useRef(null);
//   const location_latitude = useRef(null);
//   const location_longitude = useRef(null);
//   const location_city = useRef(null);
//   const location_state = useRef(null);
//   const location_country = useRef(null);
//   const location_postal_code = useRef(null);

//   useImperativeHandle(ref, () => ({
//     getValues: () => {
//       return {
//         location_id:location_id.current.value,
//         location_title: location_title.current.value,
//         location_address: location_address.current.value,
//         location_latitude: location_latitude.current.value,
//         location_longitude: location_longitude.current.value,
//         location_city: location_city.current.value,
//         location_state: location_state.current.value,
//         location_country: location_country.current.value,
//         location_postal_code: location_postal_code.current.value,
//         // location_id:"",
//       };
//     },
//   }));


//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <FormControl  >
//       <Grid container alignItems="center" className={classes['fc-form-group']}>
//         <Grid item>
//           <Typography variant="subtitle1" gutterBottom>
//             On Click
//           </Typography>
//         </Grid>
//         <Grid item>
//           <RadioGroup
//             // style={{ marginLeft: "10rem" }}
//             row
//             aria-label="radio-buttons-group"
//             name="radio-buttons-group"
//             value={selectedValue}
//             onChange={handleChange}
//           >
//             <FormControlLabel
//               value="marker"
//               name="location_settings[onclick]"
//               control={<Radio />}
//               label="Option A"
//             />
//             <FormControlLabel
//               value="custom_link"
//               name="location_settings[onclick]"
//               control={<Radio />}
//               label="Option B"
//             />
//           </RadioGroup>
//         </Grid>
//       </Grid>
//       {selectedValue === "marker" ? (
//         <Grid container alignItems="center" spacing={2} className={classes['fc-form-group hiderow ']}>
//           <Grid item md={2.7}>
//             <Typography        inputRef={location_messages} variant="subtitle1" gutterBottom>
//               Infowindow Message
//             </Typography>
//           </Grid>
//           <Grid item md={6}>
//             <TextareaAutosize
//               id="outlined-multiline-flexible"
//               name="location_messages"
//               label="Enter the marker infoWindow message for the location you are creating."
//               multiline
//               rows={6}
//               // value={textAreaValue}
//               // onChange={handleTextAreaChange}
//               variant="outlined"
//               fullWidth
//               // style={{ width: "50rem" }}
//             />
//             <Typography
//               variant="body1"
//               // style={{
//               //   whiteSpace: "nowrap",
//               //   textOverflow: "ellipsis",
//               //   color: "gray",
//               // }}
//             >
//               Enter the marker infoWindow message for the location you are
//               creating. You can enter plain text as well as HTML.
//             </Typography>
//           </Grid>
//         </Grid>
//       ) : (
//         <Grid
//         className={classes['fc-form-group hiderow ']}
//           container
//           alignItems="center"
//           justifyContent="flex-start"
//           spacing={2}
//         >
//           <Grid item xs={12} sm={2.5}>
//             <label
//               htmlFor="name"
//               // style={{ fontWeight: "bold", color: "black" }}
//             >
//               Redirect Url
//             </label>
//           </Grid>
//           <Grid item sm={8}>
//             <TextField
//               id="name"
//               name="location_settings[redirect_link]"
//               label="Enter the redirect url for the marker when its clicked."
//               variant="outlined"
//               size="large"
//               fullWidth
//               // sx={{ marginTop: "10px", width: "52rem" }}
//             />
//             <Typography
//               variant="body1"
//               // style={{
//               //   whiteSpace: "nowrap",
//               //   textOverflow: "ellipsis",
//               //   color: "gray",
//               // }}
//             >
//               Enter the redirect url here. For e.g https://www.flippercode.com
//               Site visitors will be redirected to this url when the <br />{" "}
//               marker icon is clicked
//             </Typography>
//           </Grid>
//         </Grid>
//       )}

//       {selectedValue === "custom_link" ? (
//         <Grid
//         className={classes['fc-form-group hiderow ']}
//           container
//           alignItems="center"
//           justifyContent="flex-start"
//           spacing={2}
//         >
//           <Grid item xs={12} sm={2.5}>
//             <label
//               htmlFor="name"
//               // style={{ fontWeight: "bold", color: "black" }}
//             >
//               Open in new tab
//             </label>
//           </Grid>
//           <Grid item sm={8}>
//             <FormControl sx={{ m: 1 }}>
//               {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
//               <NativeSelect
//                 // style={{ width: "50rem", marginTop: "1rem" }}
//                 id="s2id_location_settings[redirect_link_window]"
//                 input={<OutlinedInput  />}
//                 // value={age}
//                 // onChange={handleChange}
//                 // input={<BootstrapInput />}
//               >
//                 <option aria-label="None" value="" />
//                 <option>YES</option>
//                 <option>NO</option>
//               </NativeSelect>
//               <Typography
//                 variant="body1"
//                 // style={{
//                 //   whiteSpace: "nowrap",
//                 //   textOverflow: "ellipsis",
//                 //   color: "gray",
//                 // }}
//               >
//                 Open a new window tab.
//               </Typography>
//             </FormControl>
//           </Grid>
//         </Grid>
//       ) : (
//         ""
//       )}
//     </FormControl>
//   );
// })

// export default RadioButtons


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

  // const location_id = useRef(null);
  // const location_title = useRef(null);
  // const location_address = useRef(null);
  // const location_latitude = useRef(null);
  // const location_longitude = useRef(null);
  // const location_city = useRef(null);
  // const location_state = useRef(null);
  // const location_country = useRef(null);
  // const location_postal_code = useRef(null);
  const location_messages = useRef(null); // Initialize the ref for location_messages

  useImperativeHandle(ref, () => ({
    getValues: () => {
      return {
        // location_id: location_id.current.value,
        // location_title: location_title.current.value,
        // location_address: location_address.current.value,
        // location_latitude: location_latitude.current.value,
        // location_longitude: location_longitude.current.value,
        // location_city: location_city.current.value,
        // location_state: location_state.current.value,
        // location_country: location_country.current.value,
        // location_postal_code: location_postal_code.current.value,
        location_messages: location_messages.current.value,
      };
    },
  }));

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl>
      <Grid container alignItems="center" className={classes['fc-form-group']}>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            On Click
          </Typography>
        </Grid>
        <Grid item>
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
              label="Option A"
            />
            <FormControlLabel
              value="custom_link"
              name="location_settings[onclick]"
              control={<Radio />}
              label="Option B"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      {selectedValue === "marker" ? (
        <Grid container alignItems="center" spacing={2} className={classes['fc-form-group.hiderow']}>
          <Grid item md={2.7}>
            <Typography variant="subtitle1" gutterBottom>
              Infowindow Message
            </Typography>
          </Grid>
          <Grid item md={6}>
            <TextareaAutosize
              inputRef={location_messages} // Connect the ref to the TextareaAutosize component
              id="outlined-multiline-flexible"
              name="location_messages"
              label="Enter the marker infoWindow message for the location you are creating."
              multiline
              rows={6}
              variant="outlined"
              fullWidth
            />
            <Typography variant="body1">
              Enter the marker infoWindow message for the location you are creating. You can enter plain text as well as HTML.
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center" spacing={2} className={classes['fc-form-group.hiderow']}>
          <Grid item xs={12} sm={2.5}>
            <label htmlFor="name">Redirect Url</label>
          </Grid>
          <Grid item sm={8}>
            <TextField
              id="name"
              name="location_settings[redirect_link]"
              label="Enter the redirect url for the marker when it's clicked."
              variant="outlined"
              size="large"
              fullWidth
            />
            <Typography variant="body1">
              Enter the redirect url here. For example, https://www.flippercode.com. Site visitors will be redirected to this url when the marker icon is clicked.
            </Typography>
          </Grid>
        </Grid>
      )}

      {selectedValue === "custom_link" ? (
        <Grid container alignItems="center" spacing={2} className={classes['fc-form-group.hiderow']}>
          <Grid item xs={12} sm={2.5}>
            <label htmlFor="name">Open in new tab</label>
          </Grid>
          <Grid item sm={8}>
            <FormControl sx={{ m: 1 }}>
              <NativeSelect
                id="s2id_location_settings[redirect_link_window]"
                input={<OutlinedInput />}
              >
                <option aria-label="None" value="" />
                <option>YES</option>
                <option>NO</option>
              </NativeSelect>
              <Typography variant="body1">
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
