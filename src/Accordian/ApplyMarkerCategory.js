// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { styled } from '@mui/material/styles';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import NativeSelect from '@mui/material/NativeSelect';
// import InputBase from '@mui/material/InputBase';
// import { Box, Typography } from '@mui/material';
// import { useState } from 'react';
// import useApplyMarkerCategoryData from '../utils/useApplyMarkerCategoryData';

// // Define BootstrapInput component if used
// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   input: {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     '&:focus': {
//       // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// const columns = [
//   { field: 'Category', headerName: 'Category', width: 130 },
//   { field: 'Parent', headerName: 'Parent', width: 130 },
//   {
//     field: 'fullName',
//     headerName: 'Icon',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, Parent: '--', Category: '	sample marker', age: 35 },
//   // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function ApplyMarkerCategory() {
//   const [age, setAge] = useState(''); // Define the 'age' state variable
//   const [tableData ,setTableData]=useState([]);
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const ApplyTableData = useApplyMarkerCategoryData()
//   console.log(" 2 etuseApplyMarkerCategoryData  json data",ApplyTableData?.marker_category_obj)
//   // setTableData(ApplyTableData?.marker_category_obj)

//   return (
//     <div style={{ height: 'auto', width: '100%' }}>
//       <Box display="flex" alignItems="center">
//         <Typography>Show:</Typography>
//         <FormControl sx={{ m: 1 }} variant="standard">
//           <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
//           <NativeSelect
//             id="demo-customized-select-native"
//             value={age}
//             onChange={handleChange}
//             input={<BootstrapInput />}
//           >
//             <option aria-label="None" value="" />
//             <option value={10}>10</option>
//             <option value={25}>25</option>
//             <option value={50}>50</option>
//             <option value={100}>100</option>
//             <option value={200}>200</option>
//             <option value={500}>500</option>
//             <option value={'All'}>All</option>
//           </NativeSelect>
//         </FormControl>
//         <Typography>entries</Typography>
//       </Box>
//       <div style={{ height: 200, width: '100%' }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={2}
//           checkboxSelection
//           disableSelectionOnClick
//           pagination
//           pageSizeOptions={[2, 10]}
//         />
//       </div>
//     </div>
//   );
// }


//2nd this code is runniing perfect
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import useApplyMarkerCategoryData from "../utils/useApplyMarkerCategoryData";
import { addUserDetails } from "../service/api";
export default function ApplyMarkerCategory() {
  const [age, setAge] = useState("");
  const [rows, setRows] = useState([]);
  const [targetMapId, setTargetMapId] = useState(""); // Define the target group_map_id
;
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const ApplyTableData = useApplyMarkerCategoryData();

  useEffect(() => {
    if (ApplyTableData?.marker_category_obj) {
      const mappedRows = ApplyTableData.marker_category_obj.map(
        (item, index) => ({
          ...item,
          id: index + 1,
        })
      );
      setRows(mappedRows);

      // Set the target group_map_id here based on your condition
      // For example, let's set it to '2'
      setTargetMapId("2");
    }
  }, [ApplyTableData]);

  const columns = [
    { field: "group_map_id", headerName: "Map ID", width: 130 },
    { field: "group_map_title", headerName: "Category", width: 200 },
    { field: "group_parent", headerName: "Parent", width: 130 },
    {
      field: "group_marker",
      headerName: "Icon",
      width: 150,
      renderCell: (params) => (
        <img
          src={params.value} // Assuming 'group_marker' contains the image URL
          alt={`Marker ${params.row.id}`}
          style={{ width: 30, height: 30 }} // Adjust dimensions as needed
        />
      ),
    },
  ];


  // const initialValue2= {
  //   location_title: '',
  //   location_address: '',
  //   location_latitude: '',
  //   location_longitude: '',
  //   location_city: '',
  //   location_state: '',
  //   location_country: '',
  //   location_postal_code: '',
  //   location_settings: {
  //     hide_infowindow: '',
  //   },
  //   location_infowindow_default_open: '',
  //   location_draggable: '',
  // };
  
  const handleSubmit =async () => {
    console.log("Submit clicked!");
    // await addUserDetails(user)

    
  };
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <Box display="flex" alignItems="center">
        <Typography>Show:</Typography>
        <FormControl variant="standard" sx={{ marginLeft: 1 }}> 
          <InputLabel htmlFor="demo-customized-select-native">
            Entries
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={age}
            onChange={handleChange}
          >
            <option aria-label="None" value="" />
            {[10, 25, 50, 100, 200, 500, "All"].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </NativeSelect>
        </FormControl>

        <Button
          variant="contained"
          onClick={()=>handleSubmit()}
          style={{ position: "absolute", right: "2rem" }}
        >
          Submit
        </Button>
      </Box>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          pagination
          selectionModel={rows
            .filter((row) => row.group_map_id === targetMapId)
            .map((row) => row.id)}
        />
      </div>
    </div>
  );
}



// my YT code

// import React from 'react'
// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
// import { useEffect, useState } from "react";
// const ApplyMarkerCategory = () => {

//   const columns = [
//       { field: 'Category', headerName: 'Category', width: 130 },
//   { field: 'Parent', headerName: 'Parent', width: 130 },
//   {
//     field: 'fullName',
//     headerName: 'Icon',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

//   const handlechangepage = (event, newpage) => {
//     pagechange(newpage);
//   };

//   const handleRowsPerPage = (event) => {
//     rowperpagechange(+event.target.value);
//     pagechange(0);
//   };

//   const [rows, rowchange] = useState([]);
//   const [page, pagechange] = useState(0);
//   const [rowperpage, rowperpagechange] = useState(5);

//   useEffect(() => {
//     fetch("http://localhost/wordpress/gold/wp-json/wpgmp/v1/marker_categories")
//       .then(resp => resp.json())
//       .then(resp => {
//         if (Array.isArray(resp)) {
//           rowchange(resp);
//           console.log('rows m sdata',rows)
//         } else {
//           rowchange([]); // If response is not an array, set an empty array
//         }
//       })
//       .catch(e => {
//         console.log('error hai bhai',e.message);
//       });
//   }, []);
//   return (
//     <div style={{ textAlign: 'center' }}>
//             <h1>MUI Table</h1>

//             <Paper sx={{ width: '90%', marginLeft: '5%' }}>
//                 <TableContainer sx={{maxHeight:450}}>
//                     <Table stickyHeader>
//                         <TableHead>
//                             <TableRow>
//                                 {columns.map((column) => (
//                                     <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>{column.name}</TableCell>
//                                 ))}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows && rows
//                                 .slice(page * rowperpage, page * rowperpage + rowperpage)
//                                 .map((row, i) => {
//                                     return (
//                                         <TableRow key={i}>
//                                             {columns && columns.map((column, i) => {
//                                                 let value = row[column.id];
//                                                 return (
//                                                     <TableCell key={value}>
//                                                         {value}
//                                                     </TableCell>
//                                                 )
//                                             })}
//                                         </TableRow>
//                                     )
//                                 })}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     rowsPerPage={rowperpage}
//                     page={page}
//                     count={rows.length}
//                     component="div"
//                     onPageChange={handlechangepage}
//                     onRowsPerPageChange={handleRowsPerPage}

//                 >

//                 </TablePagination>
//             </Paper>

//         </div>
//   )
// }

// export default ApplyMarkerCategory