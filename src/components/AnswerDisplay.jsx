import React from "react";
import { Typography, Box } from "@mui/material";

function AnswerDisplay({ answer }) {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h6">Answer: {answer}</Typography>
    </Box>
  );
}

export default AnswerDisplay;
