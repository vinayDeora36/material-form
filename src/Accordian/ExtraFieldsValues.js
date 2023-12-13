import { Grid, TextField } from "@mui/material";
import React from "react";

const ExtraFieldsValues = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4}>
        <label htmlFor="name" style={{ fontWeight: "bold", color: "black" }}>
    phone
        </label>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id="name"
          // label="Enter Location Address"
          variant="outlined"
          size="large"
          fullWidth
          sx={{ marginTop: "10px" }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <label htmlFor="name" style={{ fontWeight: "bold", color: "black" }}>
    Email
        </label>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id="name"
          // label="Enter Location Address"
          variant="outlined"
          size="large"
          fullWidth
          sx={{ marginTop: "10px" }}
        />
      </Grid>
    </Grid>
    
  );
};

export default ExtraFieldsValues;
