import React, { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteUser, getUsers } from "../service/api";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import AccBody from "../Accordian/AccBody";
const AllUsers = () => {
  const [locationDetails, setLocationDetails] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    var responce = await getUsers();
    responce = responce?.data?.location_obj;
    console.log("responce", responce);
  
    setLocationDetails(responce);
    // console.log("responce location_id", locationDetails?.location_id  );
  };

  const deleteUserData = async (id) => {
   await deleteUser(id);

    getUserDetails();
  };
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>location id</TableCell>
            <TableCell>location title</TableCell>
            <TableCell>location address</TableCell>
            {/* <TableCell>location_draggable</TableCell>
      <TableCell>location_infowindow_default_open</TableCell>
      <TableCell>location_animation</TableCell> */}
            <TableCell>location latitude</TableCell>
            <TableCell>location longitude</TableCell>
            <TableCell>location city</TableCell>
            <TableCell>location state</TableCell>
            <TableCell>location country</TableCell>
            <TableCell>location postal_code</TableCell>
            <TableCell>location author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {locationDetails?.map((location) => (
            <TableRow>
              <TableCell>{location?.location_id}</TableCell>
              <TableCell>{location?.location_title}</TableCell>
              <TableCell>{location?.location_address}</TableCell>
              {/* <TableCell>{location?.location_draggable}</TableCell>
      <TableCell>{location?.location_infowindow_default_open}</TableCell>
      <TableCell>{location?.location_animation}</TableCell> */}
              <TableCell>{location?.location_latitude}</TableCell>
              <TableCell>{location?.location_longitude}</TableCell>
              <TableCell>{location?.location_city}</TableCell>
              <TableCell>{location?.location_state}</TableCell>
              <TableCell>{location?.location_country}</TableCell>
              <TableCell>{location?.location_postal_code}</TableCell>
              <TableCell>{location?.location_author}</TableCell>

              {/* <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: "1rem" }}
                  component={Link}
                  to={`/edit/${location.location_id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserData(location.location_id)}
                >
                  Delete
                </Button>
              </TableCell> */}

              <TableCell>
                <IconButton
                  variant="contained"
                  style={{ marginRight: "1rem" }}
                  component={Link}
                  to={`/edit/${location.location_id}`}
                  // to={`wordpress/gold/wp-admin/admin.php?page=wpgmp_form_location&doaction=edit&location_id=${location.location_id}`}
                  // to={`/edit/${location.location_id}?openAccordion=1`}

                  aria-label="edit"
                >
                  {/* <AccBody id={location.location_id}/> */}
                  <EditIcon />
                </IconButton>
                <IconButton
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserData(location.location_id)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>

              <TableCell>
                <Checkbox value={4} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AllUsers;

// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// Inside your TableCell component:
{
  /* <TableCell>
  <IconButton
    variant="contained"
    style={{ marginRight: '1rem' }}
    component={Link}
    to={`/edit/${location.location_id}`}
    aria-label="edit"
  >
    <EditIcon />
  </IconButton>
  <IconButton
    variant="contained"
    color="secondary"
    onClick={() => deleteUserData(location.location_id)}
    aria-label="delete"
  >
    <DeleteIcon />
  </IconButton>
</TableCell> */
}
