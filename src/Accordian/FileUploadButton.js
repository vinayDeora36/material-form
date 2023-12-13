import React from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const FileUploadButton = () => {
  const fileInputRef = React.useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    console.log('Selected file:', file);
  };

  return (
    <div style={{margin:'1.5rem 2rem '}}>
      <input
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
