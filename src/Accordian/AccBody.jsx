import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExtraFieldsValues from "./ExtraFieldsValues";
import LocationInformation from "./LocationInformation";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import ApplyMarkerCategory from "./ApplyMarkerCategory";
import { Button, Grid } from "@mui/material";
import { addLocationDetails, editLocationDetails,} from "../service/api";
import { useRef } from "react";
import { useEffect } from "react";

const AccBody = () => {
  const component1Ref = useRef();
  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState({}); // Initialize user state
  
  const navigate = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Function to receive 'user' data from the child component ('LocationInformation')
  const handleReceivedUserData = (userData) => {
    setUser(userData); // Update 'user' state in the parent component with the received data
   

  };

// Add New Location Or Edit Location (by save Location button);
  const handleSubmitFormData = async (e) => {
    e.preventDefault();
    const valuesComponent1 = component1Ref.current.getValues();
  
    try {
      if (!user.location_id) {
        await addLocationDetails(valuesComponent1);
      } else {
        await editLocationDetails(user, user.location_id);
      }
      navigate("/all");
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle the error or provide feedback if necessary
    }
  };
  

  useEffect(() => {
    setExpanded("panel1"); // Open first accordion if openAccordion is set to '1'
  }, []);
  
  return (
    <form onSubmit={handleSubmitFormData}>
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
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Location Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <LocationInformation
              ref={component1Ref}
              onSendUserData={handleReceivedUserData}
            />
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
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                color: "black",
              }}
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
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Apply Marker Category
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ApplyMarkerCategory />
          </AccordionDetails>
        </Accordion>

        <Grid className=" mt-4" >
          <Button type="submit" variant="contained" size="small" >
            Save Location
          </Button>
        </Grid>
      </div>
    </form>
  );
};
export default AccBody;
