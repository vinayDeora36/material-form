import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser ,editUser } from "../service/api";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { addUser } from "../service/api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin: 15px;
  }
`;



const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const navigate = useNavigate();
  const {id}= useParams()
 
  useEffect(() => {
    getUserData();
  }, []);

    const getUserData=async ()=>{
      let responce = await getUser(id)
      console.log("edit responce",responce)
      setUser(responce.data)
    }
  
    const onValueChange = (e) => {
    // console.log(e.target.name ,e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await editUser(user , id);
    navigate("/all")

  };
  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>

        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name"value={user.name}/>
        </FormControl>

        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Edit User
        </Button>
      </Container>
    </>
  );
};

export default EditUser;
