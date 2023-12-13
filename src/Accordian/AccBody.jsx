import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExtraFieldsValues from "./ExtraFieldsValues";
import LocationInformation from "./LocationInformation";

import { useState } from "react";
import ApplyMarkerCategory from "./ApplyMarkerCategory";
import { Button, Grid } from "@mui/material";

export default function AccBody() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ width: "70%", margin: "2rem auto" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            style={{ whiteSpace: "nowrap", fontWeight: "bold", color: "black" }}
          >
            Location Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LocationInformation />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0, whiteSpace: "nowrap" }}
            style={{ whiteSpace: "nowrap", fontWeight: "bold", color: "black" }}
          >
            Extra Fields Values
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ExtraFieldsValues />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            style={{ whiteSpace: "nowrap", fontWeight: "bold", color: "black" }}
          >
            Apply Marker Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ApplyMarkerCategory />
        </AccordionDetails>
      </Accordion>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        style={{ minHeight: "60vh" }}
      ></Grid>
      <Grid item>
        <Button type='submit' variant="contained" size="small">
          Save Location
        </Button>
      </Grid>
    </div>
  );
}
