import React from "react";
import { TextField } from "@mui/material";

function QuestionInput({ value, onChange }) {
  return (
    <TextField
      fullWidth
      label="Ask a question..."
      value={value}
      onChange={onChange}
      variant="outlined"
      sx={{ marginBottom: 2 }}
    />
  );
}

export default QuestionInput;
