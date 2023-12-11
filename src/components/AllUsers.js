import React , { useState , useEffect }from 'react'

import { deleteUser, getUsers } from "../service/api";
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom';
const AllUsers = () => {
 
 const [userDetails, setUserDetails]= useState([])
  useEffect(()=>{
    getUserDetails()
  },[])

  const getUserDetails=async ()=>{
   let responce =await getUsers()
   console.log("responce",responce)
   setUserDetails(responce.data);
  }
  
  const deleteUserData=async(id)=>{
    await deleteUser(id);
    getUserDetails()
  }
 return (
<> 
<Table>
  <TableHead>
    <TableRow>
      <TableCell>Id</TableCell>
      <TableCell>name</TableCell>
      <TableCell>UserName</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Phone</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
{
  userDetails.map(user=>(
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>
        <Button variant='contained' style={{marginRight:"1rem"}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
        <Button variant='contained' color='secondary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
      </TableCell>
    </TableRow>
  ))
}
  </TableBody>
</Table>
</>
  )
}

export default AllUsers