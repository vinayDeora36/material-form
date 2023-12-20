import axios from "axios";

const API_URL = "http://localhost/wordpress/gold/wp-json/wpgmp/v1/locations";
const API_URL2 = "http://localhost/wordpress/gold/wp-json/wpgmp/v1/locations";
// const GET_API_UTL_BY_ID= "http://localhost/wordpress/gold/wp-json/wpgmp/v1/locations"

// Add New Location Details in Form to Api
export const addLocationDetails = async (data) => {
  try {
    return await axios.post(API_URL2, data);
  } catch (error) {
    console.log("error while calling addUserDetails api ", error.message);
  }
};

// Get location Details in Table (AllLocation.js)
export const getLocations = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("error while calling getUsers api ", error.message);
  }
};

// Edit Location From Table
export const editLocationDetails = async (data, id) => {
  try {
    return await axios?.put(`${API_URL2}/${id}`, data);
  } catch (error) {
    console.log("error while editUser2", error.message);
  }
};

// Get all Location Details In Form when user Edit the Form:
export const get_location_In_InputFields = async (id) => {
  try {
    return await axios.get(`${API_URL2}/${id}`);
  } catch (error) {
    console.log(
      "error while calling get_User_Details_In_InputFields api ",
      error.message
    );
  }
};

// Delete Location Details from Table  Api
export const deleteLocationDetails = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("error while delete user Details", error.message);
  }
};
