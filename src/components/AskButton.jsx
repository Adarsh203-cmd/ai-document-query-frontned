import React from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function AskButton({ onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick} 
    sx={{
      width: "10%",  // Set the width to 50% of the parent container
    }}
    startIcon={<SendIcon />}>
      Ask
    </Button>
  );
}

export default AskButton;
