import React from "react";
import { TextField } from "@mui/material";

function UploadedContent({ content }) {
  return (
    <TextField
      fullWidth
      label="Uploaded Content"
      value={content}
      multiline
      variant="outlined"
      InputProps={{
        readOnly: true,
      }}
      sx={{
        marginBottom: 2,
        //minHeight: "45vh", // Ensures the height is at least 45% of the viewport
        maxHeight: "70vh", // Optional: Prevents it from getting too tall
        overflow: "auto",  // Enables scroll if content overflows
      }}
    />
  );
}

export default UploadedContent;
