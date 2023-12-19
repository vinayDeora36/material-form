// import React, { forwardRef, useImperativeHandle, useRef } from "react";
// import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
// import MapWithLocationField from "./MapWithLocationField";
// import RadioButtons from "./RadioButtons";
// import { makeStyles } from "@mui/styles";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   Input,
//   InputLabel,
//   NativeSelect,
//   OutlinedInput,
//   Typography,
// } from "@mui/material";
// import FileUploadButton from "./FileUploadButton";
// import { useState } from "react";
// import { editUser2, getUsers2 } from "../service/api";
// import { useEffect } from "react";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// // import { useState } from "react";
// // import { addUserDetails } from "../service/api";
// // import AccBody from "./AccBody";

// const initialValue2 = {
//   location_title: "",
//   location_address: "",
//   location_latitude: "",
//   location_longitude: "",
//   location_city: "",
//   location_state: "",
//   location_country: "",
//   location_postal_code: "",
//   location_settings: {
//     hide_infowindow: "",
//   },
//   location_infowindow_default_open: "",
//   location_draggable: "",
// };

// const useStyles = makeStyles({
//   "fc-3": {
//     // backgroundColor: "lightblue",
//   },
//   "fc-6": {
//     // backgroundColor: "lightgreen",
//   },
//   checkbox: {
//     // backgroundColor: "GrayText",
//   },
//   "fc-form-group": {
//     // Your custom styles here for the cell
//     // backgroundColor: "yellow",
//     // margin: "2rem",
//   },
// });

// const EditUserLocation = forwardRef((props, ref) => {
//   const [user, setUser] = useState(initialValue2);
//   const classes = useStyles();
//   const {id}= useParams()
//   const navigate = useNavigate();


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
//         location_title: location_title.current.value,
//         location_address: location_address.current.value,
//         location_latitude: location_latitude.current.value,
//         location_longitude: location_longitude.current.value,
//         location_city: location_city.current.value,
//         location_state: location_state.current.value,
//         location_country: location_country.current.value,
//         location_postal_code: location_postal_code.current.value,
//       };
//     },
//   }));

//   useEffect(() => {
//     getUserData2();
//   }, []);

//     const getUserData2=async ()=>{
//       let responce = await getUsers2( id)
//       console.log("edit responce getUsers2",responce?.data?.location_obj)
//       const userData = responce?.data?.location_obj;
//       setUser(userData)
//     }
  
//   const editUserDetails2 = async () => {
//     await editUser2(user , id);
//     navigate("/all")

//   };
//   const onValueChange = (e) => {
//     console.log(e.target.name ,e.target.value)
//     // setUser({ ...user, [e.target.name]: e.target.value });
//     console.log("USER H",user);
//   };
//   const label = { inputProps: { "aria-label": "Checkbox demo" } };
//   console.log("user.location_address",user.location_address)
//   return (
//     <div>
//         <Button variant="contained" onClick={() => editUserDetails2()}>
//           Edit User
//         </Button>
//         <FormControl>
//       <Grid
//         container
//         spacing={2}
//         alignItems="center"
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
//           >
//             Location Title
//           </label>
//           <Typography variant="subtitle1" component="span" color="error">
//             *
//           </Typography>
//         </Grid>
//         <Grid item xs={8}>
//           <Input
//             inputRef={location_title}
//             className={classes["form-control"]}
//             id="name"
//             name="location_title"
//             label="Enter Location Title"
//             variant="outlined"
//             size="large"
//             fullWidth
//             required
//             onChange={(e) => onValueChange(e)} 
//               value={user.location_title || ''}
          
//           />
//         </Grid>
//       </Grid>
//       </FormControl>
//       <Grid
//         container
//         spacing={2}
//         alignItems="center"
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{ fontWeight: "bold", color: "black" }}
//           >
//             Location Address{" "}
//           </label>
//           <Typography variant="subtitle1" component="span" color="error">
//             *
//           </Typography>
//         </Grid>
//         <Grid item xs={8}>
//           <Input
//             inputRef={location_address}
//             id="name"
//             className={
//               classes["form-control wpgmp_auto_suggest pac-target-input"]
//             }
//             name="location_address"
//             label="Enter Location Address"
//             variant="outlined"
//             size="large"
//             fullWidth
//             sx={{ marginTop: "10px" }}
//             required
//             onChange={(e) => onValueChange(e)} 
//              value={user?.location_address}
//           />
//           <Typography
//             variant="body1"
//             // style={{
//             //   whiteSpace: "nowrap",
//             //   textOverflow: "ellipsis",
//             //   color: "gray",
//             // }}
//           >
//             Enter the location address here. Google auto suggest helps you to
//             choose one.
//           </Typography>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         alignItems="center"
//         spacing={2}
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{ fontWeight: "bold", color: "black" }}
//           >
//             Latitude and Longitude{" "}
//           </label>
//           <Typography variant="subtitle1" component="span" color="error">
//             *
//           </Typography>
//         </Grid>
//         <Grid item xs={4}>
//           <TextField
//             inputRef={location_latitude}
//             className={classes["fc-3"]}
//             id="googlemap_latitude"
//             name="location_latitude"
//             label="Latitude"
//             variant="outlined"
//             size="small"
//             fullWidth
//             // sx={{ marginTop: "10px" }}
//             required
//             // onChange={(e) => onValueChange(e)} 
//              value={user.location_latitude}
//           />
//         </Grid>

//         <Grid item xs={4}>
//           <TextField
//             inputRef={location_longitude}
//             className={classes["fc-3"]}
//             id="googlemap_longitude"
//             name="location_longitude"
//             label="Longitude"
//             variant="outlined"
//             size="small"
//             fullWidth
//             // sx={{ marginTop: "10px" }}
//             required
//             // onChange={(e) => onValueChange(e)} 
//              value={user.location_longitude}
//           />
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         alignItems="center"
//         spacing={2}
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{ fontWeight: "bold", color: "black" }}
//           >
//             City & State{" "}
//           </label>
//         </Grid>
//         <Grid item xs={4}>
//           <TextField
//             inputRef={location_city}
//             className={classes["fc-3"]}
//             id="googlemap_city"
//             name="location_city"
//             label="City"
//             variant="outlined"
//             size="small"
//             fullWidth
//             // sx={{ marginTop: "10px" }}
//             // onChange={(e) => onValueChange(e)}  
//             value={user.location_city}
//           />
//         </Grid>

//         <Grid item xs={4}>
//           <TextField
//             inputRef={location_state}
//             className={classes["fc-3"]}
//             id="googlemap_state"
//             name="location_state"
//             label="State"
//             variant="outlined"
//             size="small"
//             fullWidth
//             // sx={{ marginTop: "10px" }}
//             // onChange={(e) => onValueChange(e)}  
//             value={user.location_state}
//           />
//         </Grid>
//       </Grid>
//       <Grid
//         container
//         alignItems="center"
//         spacing={2}
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             //  style={{ fontWeight: "bold", color: "black" }}
//           >
//             Country & Postal Code{" "}
//           </label>
//         </Grid>
//         <Grid item xs={4}>
//           <TextField
//             inputRef={location_country}
//             className={classes["fc-3"]}
//             id="googlemap_country"
//             name="location_country"
//             label="Country"
//             variant="outlined"
//             size="small"
//             fullWidth
//             // sx={{ marginTop: "10px" }}
//             // onChange={(e) => onValueChange(e)}  
//             value={user.location_country}
//           />
//         </Grid>

//         <Grid item md={4}>
//           <TextField
//             inputRef={location_postal_code}
//             className={classes["fc-3"]}
//             id="googlemap_postal_code"
//             name="location_postal_code"
//             label="Postal Code "
//             variant="outlined"
//             size="small"
//             fullWidth
//             // sx={{ marginTop: "10px" }}
//             // onChange={(e) => onValueChange(e)}  
//             value={user.location_postal_code}
//           />
//         </Grid>
//       </Grid>
//       <MapWithLocationField />
//       <RadioButtons />

//       <Grid
//         container
//         spacing={2}
//         alignItems="center"
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
//           >
//             Location Image
//           </label>
//         </Grid>

//         <FileUploadButton />
//       </Grid>

//       <Grid
//         container
//         spacing={2}
//         alignItems="center"
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
//           >
//             Disable Infowindow
//           </label>
//         </Grid>
//         <Grid
//           item
//           // style={{ display: "flex", alignItems: "center" }}
//           className={classes.checkbox}
//         >
//           <Checkbox
//             name="location_settings[hide_infowindow]"
//             value={false}
//             id="location_settings"
//             {...label}
//           />

//           <Typography
//             variant="body1"
//             // style={{
//             //   whiteSpace: "nowrap",
//             //   textOverflow: "ellipsis",
//             //   marginTop: "1rem",
//             // }}
//           >
//             Do you want to disable infowindow for this location?
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid
//         container
//         spacing={2}
//         alignItems="center"
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{
//             //   fontWeight: "bold",
//             //   color: "black",
//             //   fontStyle: "inherit",
//             //   fontStyle: "inherit",
//             //   whiteSpace: "nowrap",
//             // }}
//           >
//             Infowindow Default Open
//           </label>
//         </Grid>
//         <Grid
//           item
//           // style={{ display: "flex", alignItems: "center" }}
//           className={classes.checkbox}
//         >
//           <Checkbox
//             value={true}
//             name="location_infowindow_default_open"
//             id="location_infowindow_default_open"
//             {...label}
//           />

//           <Typography
//             variant="body1"
//             // style={{
//             //   whiteSpace: "nowrap",
//             //   textOverflow: "ellipsis",
//             //   marginTop: "1rem",
//             // }}
//           >
//             Check to enable infowindow default open.
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid
//         container
//         spacing={2}
//         alignItems="center"
//         className={classes["fc-form-group"]}
//       >
//         <Grid item xs={2} className={classes["fc-3"]}>
//           <label
//             htmlFor="name"
//             // style={{ fontWeight: "bold", color: "black", fontStyle: "inherit" }}
//           >
//             Marker Draggable
//           </label>
//         </Grid>
//         <Grid
//           item
//           // style={{ display: "flex", alignItems: "center" }}
//           className={classes.checkbox}
//         >
//           <Checkbox
//             name="location_draggable"
//             id="location_draggable"
//             value={true}
//             {...label}
//           />

//           <Typography
//             variant="body1"
//             // style={{
//             //   whiteSpace: "nowrap",
//             //   textOverflow: "ellipsis",
//             //   marginTop: "1rem",
//             // }}
//           >
//             Check if you want to allow visitors to drag the marker.
//           </Typography>
//         </Grid>
//       </Grid>
//       <Box sx={{ minWidth: 120 }}>
//         <Grid
//           className={classes["fc-form-group"]}
//           container
//           alignItems="center"
//           justifyContent="flex-start"
//           spacing={2}
//         >
//           <Grid item xs={12} sm={2.5} className={classes["fc-3"]}>
//             <label
//               htmlFor="name"
//               // style={{ fontWeight: "bold", color: "black" }}
//             >
//               Marker Animation
//             </label>
//           </Grid>
//           <Grid item sm={8}>
//             <FormControl sx={{ m: 1 }} variant="outlined">
//               <NativeSelect
//                 // value={selectedAnimation}
//                 // onChange={handleAnimationChange}
//                 input={<OutlinedInput />}
//                 label="please Select"
//                 id="select2-chosen-2"
//                 // style={{
//                 //   width: "50rem",
//                 //   marginTop: "1rem",
//                 //   marginLeft: "-3rem",
//                 // }}
//                 // id="marker-animation-select"
//               >
//                 <option aria-label="please Select" value="" />
//                 <option value="BOUNCE">BOUNCE</option>
//                 <option value="DROP">DROP</option>
//               </NativeSelect>
//             </FormControl>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// });

// export default EditUserLocation;
import React from 'react'

const EditUserLocation = () => {
  return (
    <div>EditUserLocation</div>
  )
}

export default EditUserLocation