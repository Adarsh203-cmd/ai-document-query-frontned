import React from "react";
import { Box } from "@mui/material";

function FileUploadInput({ onFileChange }) {
  return (
    <Box sx={{ marginBottom: 2, width: "100%" }}>
      <input
        type="file"
        onChange={onFileChange}
        style={{ width: "100%", marginBottom: "10px" }}
      />
    </Box>
  );
}

export default FileUploadInput;
