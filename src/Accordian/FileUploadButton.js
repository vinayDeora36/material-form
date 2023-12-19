import React from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  'fc-3': {
    // backgroundColor: 'lightblue',

  },
  'fc-6': {
    // backgroundColor: 'lightgreen',

  },
  'fc-form-group': {
    // // Your custom styles here for the cell
    // backgroundColor: 'yellow',
    // margin:'2rem',
  },
});



const FileUploadButton = () => {
  const fileInputRef = React.useRef(null);
  const classes = useStyles();

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    console.log('Selected file:', file);
  };

  return (
    <div style={{margin:'1.5rem 2rem '}} className={classes['fc-6']}>
      <input
      id="input_loc_img"
      name="location_settings[featured_image]"
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button variant="contained" color="primary" onClick={handleFileUpload}>
        Choose File
      </Button>
    </div>
  );
};

export default FileUploadButton;
