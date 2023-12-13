import * as React from "react";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { NativeSelect, OutlinedInput, TextField, TextareaAutosize } from "@mui/material";
import { useState } from "react";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            On Click
          </Typography>
        </Grid>
        <Grid item>
          <RadioGroup
            style={{ marginLeft: "10rem" }}
            row
            aria-label="radio-buttons-group"
            name="radio-buttons-group"
            value={selectedValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="a"
              name="location_settings[onclick]"
              control={<Radio />}
              label="Option A"
            />
            <FormControlLabel
              value="b"
              name="location_settings[onclick]"
              control={<Radio />}
              label="Option B"
            />
          </RadioGroup>
        </Grid>
      </Grid>
      {selectedValue === "a" ? (
        <Grid container alignItems="center" spacing={2}>
          <Grid item md={2.7}>
            <Typography variant="subtitle1" gutterBottom>
              Infowindow Message
            </Typography>
          </Grid>
          <Grid item md={6}>
            <TextareaAutosize
              id="outlined-multiline-flexible"
              name="location_messages"
              label="Enter the marker infoWindow message for the location you are creating."
              multiline
              rows={6}
              // value={textAreaValue}
              // onChange={handleTextAreaChange}
              variant="outlined"
              fullWidth
              style={{ width: "50rem" }}
            />
            <Typography
              variant="body1"
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "gray",
              }}
            >
              Enter the marker infoWindow message for the location you are
              creating. You can enter plain text as well as HTML.
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={2.5}>
            <label
              htmlFor="name"
              style={{ fontWeight: "bold", color: "black" }}
            >
              Redirect Url
            </label>
          </Grid>
          <Grid item sm={8}>
            <TextField
              id="name"
              label="Enter the redirect url for the marker when its clicked."
              variant="outlined"
              size="large"
              fullWidth
              sx={{ marginTop: "10px", width: "52rem" }}
            />
            <Typography
              variant="body1"
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "gray",
              }}
            >
              Enter the redirect url here. For e.g https://www.flippercode.com
              Site visitors will be redirected to this url when the <br />{" "}
              marker icon is clicked
            </Typography>
          </Grid>
        </Grid>
      )}

      {selectedValue === "b" ? (
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={2.5}>
            <label
              htmlFor="name"
              style={{ fontWeight: "bold", color: "black" }}
            >
              Open in new tab
            </label>
          </Grid>
          <Grid item sm={8}>
            <FormControl sx={{ m: 1 }}>
              {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
              <NativeSelect
                style={{ width: "50rem", marginTop: "1rem" }}
                id="demo-customized-select-native"
                input={<OutlinedInput  />}
                // value={age}
                // onChange={handleChange}
                // input={<BootstrapInput />}
              >
                <option aria-label="None" value="" />
                <option>YES</option>
                <option>NO</option>
              </NativeSelect>
              <Typography
                variant="body1"
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  color: "gray",
                }}
              >
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
}
