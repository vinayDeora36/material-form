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
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const AllLocation = () => {
  const [locationDetails, setLocationDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredLocations = locationDetails.filter((location) =>
    location.location_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-1 my-4 border border-gray-400 mx-4 rounded-md  w-[30rem] focus:outline-none"
      />
      {/* <Button type="submit" variant="contained" size="small">
        Search
      </Button> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                id="cb-select-all-1"
                value={locationDetails?.location_id}
              />
            </TableCell>

            <TableCell style={{whiteSpace: "nowrap",fontWeight: "bold",color: "black",margin: "0 10px" }}> Title</TableCell>
            <TableCell style={{whiteSpace: "nowrap",fontWeight: "bold",color: "black",margin: "0 10px" }}>  Address</TableCell>
            <TableCell style={{whiteSpace: "nowrap",fontWeight: "bold",color: "black",margin: "0 10px" }}>  City</TableCell>
            <TableCell style={{whiteSpace: "nowrap",fontWeight: "bold",color: "black",margin: "0 10px" }}> Latitude</TableCell>
            <TableCell style={{whiteSpace: "nowrap",fontWeight: "bold",color: "black",margin: "0 10px" }}>  Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {filteredLocations?.map((location, index) => (
            <TableRow  className={index % 2 === 0 ? "bg-gray-100 " : "bg-white" }>
              <TableCell>
                <Checkbox name="id[]" value={location?.location_id} />
              </TableCell>

              <TableCell style={{whiteSpace: "nowrap",color: "gray",margin: "0 10px" }}>{location?.location_title}</TableCell>
              <TableCell style={{whiteSpace: "nowrap",color: "GrayText",margin: "0 10px" }}>{location?.location_address}</TableCell>
              <TableCell style={{whiteSpace: "nowrap",color: "GrayText",margin: "0 10px" }}>{location?.location_city}</TableCell>
              <TableCell style={{whiteSpace: "nowrap",color: "GrayText",margin: "0 10px" }}>{location?.location_latitude}</TableCell>
              <TableCell style={{whiteSpace: "nowrap",color: "GrayText",margin: "0 10px" }}>{location?.location_longitude}</TableCell>
              <TableCell>
                <IconButton
                  variant="contained"
                  style={{ marginRight: "1rem" }}
                  component={Link}
                  to={`/edit/${location.location_id}`}
                  aria-label="edit"
                  className="hover:text-blue-600 "
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  variant="contained"
                  onClick={() => deleteLocation(location.location_id)}
                  aria-label="delete"
                  className="hover:text-red-600"
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
