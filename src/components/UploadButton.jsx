import React from "react";
import { Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

function UploadButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<UploadIcon />}
    >
      Upload
    </Button>
  );
}

export default UploadButton;
