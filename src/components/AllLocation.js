import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteLocationDetails, getLocations } from "../service/api";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";

const AllLocation = () => {
  const [locationDetails, setLocationDetails] = useState([]);
  useEffect(() => {
    getLocationsDetails();
  }, []);

  const getLocationsDetails = async () => {
    var responce = await getLocations();
    responce = responce?.data?.location_obj;
    // console.log("responce", responce);

    setLocationDetails(responce);
    // console.log("responce location_id", locationDetails?.location_id  );
  };

  const deleteLocation = async (id) => {
    await deleteLocationDetails(id);

    getLocationsDetails();
  };
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                id="cb-select-all-1"
                value={locationDetails?.location_id}
              />
            </TableCell>

            <TableCell> Title</TableCell>
            <TableCell> Address</TableCell>
            <TableCell> City</TableCell>
            <TableCell> Latitude</TableCell>
            <TableCell> Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locationDetails?.map((location) => (
            <TableRow>
              <TableCell>
                <Checkbox name="id[]" value={location?.location_id} />
              </TableCell>

              <TableCell>{location?.location_title}</TableCell>
              <TableCell>{location?.location_address}</TableCell>
              <TableCell>{location?.location_city}</TableCell>
              <TableCell>{location?.location_latitude}</TableCell>
              <TableCell>{location?.location_longitude}</TableCell>
              <TableCell>
                <IconButton
                  variant="contained"
                  style={{ marginRight: "1rem" }}
                  component={Link}
                  to={`/edit/${location.location_id}`}
                  aria-label="edit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  variant="contained"
                  onClick={() => deleteLocation(location.location_id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllLocation;
