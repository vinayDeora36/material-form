import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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


// const initialValue = {
//   name: "",
//   Email: "",
//   userName: "",
//   phone: "",
// };

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

  const AddUsers = () => {
    const [user, setUser] = useState(initialValue);
    const navigate =useNavigate()
    
    const onValueChange = (e) => {
      // console.log(e.target.name ,e.target.value)
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user);
    };

    const addUserDetails = async() => {
      await addUser(user);
      navigate("/all")

    };

  return (
    <>
      <Container>
        <Typography variant="h4">Add User</Typography>

        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>

        <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" required />
        </FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Submit
        </Button>
      </Container>
    </>
  );
};

export default AddUsers;
