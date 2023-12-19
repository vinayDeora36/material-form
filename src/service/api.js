import axios from "axios";

const API_URL = "http://localhost/wordpress/gold/wp-json/wpgmp/v1/locations";
const API_URL2 ='http://localhost/wordpress/gold/wp-json/wpgmp/v1/locations';
const GET_API_UTL_BY_ID= "http://localhost/wordpress/gold/wp-json/wpgmp/v1/locations"

export const addUser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("error while calling addUser api ", error.message);
  }
};


export const getUsers =async() =>{
    try{
        return await axios.get(API_URL)
    }catch(error){
        console.log("error while calling getUsers api ", error.message)
    }
}

// export const getUsers = async (id) => {
//     // id = id || '';
//     try {
//         return await axios.get(`${API_URL}/${id}`);
//     } catch (error) {
//         console.log('Error while calling getUsers api ', error);
//     }
// }
// get single user data for Edit user
export const getUser =async(data) =>{
    try{
        return await axios?.get(`${API_URL}/${data}`)
    }catch(error){
        console.log("error while calling getUser api ", error.message)
    }
}

export const editUser =async (data , id)=>{
    try{
        return await axios?.put(`${API_URL}/${id}`, data)
    }catch(error){
        console.log("error while edit user", error.message)
    }
}

export const deleteUser =async (id)=>{
    try{
        return await axios.delete(`${API_URL}/${id}`)
    }catch(error){
        console.log("error while delete user Details" , error.message)
    }
}

export const addUserDetails = async (data) => {
    try {
      return await axios.post(API_URL2, data);
    } catch (error) {
      console.log("error while calling addUserDetails api ", error.message);
    }
  };



export const editUser2 =async (data , id)=>{
    try{
        return await axios?.put(`${API_URL2}/${id}`, data)
    }catch(error){
        console.log("error while editUser2", error.message)
    }
}

export const getUsers2 =async(id) =>{
    try{
        return await axios.get(`${API_URL2}/${id}`)
    }catch(error){
        console.log("error while calling getUsers2 api ", error.message)
    }
}