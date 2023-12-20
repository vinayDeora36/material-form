


import React, { useState, useEffect } from 'react';
import useApplyMarkerCategoryData from '../utils/useApplyMarkerCategoryData';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Checkbox,
} from '@mui/material';


const ApplyMarkerCategory = () => {
  const [data, setData] = useState([]);
  const ApplyMakeData = useApplyMarkerCategoryData();

  useEffect(() => {
    if (ApplyMakeData?.marker_category_obj) {
      setData(ApplyMakeData.marker_category_obj);
    }
  }, [ApplyMakeData]);
  // console.log("ApplyMakeData?.marker_category_obj",ApplyMakeData?.marker_category_obj)
  // console.log("data?.group_map_id", data?.group_map_id)
  return (
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>Select</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Parent</TableCell>
          <TableCell>Icon</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
            {/* <Checkbox value={item.group_map_id} /> */}
              <Checkbox name='location_group_map[]' value={item?.group_map_id}/>
            </TableCell>
           
            <TableCell>{item?.group_map_title}</TableCell>
            <TableCell>{item?.group_parent}</TableCell>
            <TableCell>
              <img
                src={item?.group_marker} // Assuming 'group_marker' contains the image URL
                alt={`Icon ${index + 1}`}
                style={{ width: 30, height: 30 }} // Adjust dimensions as needed
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApplyMarkerCategory;
