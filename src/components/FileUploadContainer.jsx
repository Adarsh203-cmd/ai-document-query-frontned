import React, { useState } from "react";
import axios from "axios";
import FileUploadInput from "./FileUploadInput";
import UploadButton from "./UploadButton";
import UploadedContent from "./UploadedContent";
import QuestionInput from "./QuestionInput";
import AskButton from "./AskButton";
import AnswerDisplay from "./AnswerDisplay";
import { CircularProgress, Box, Card, Typography } from "@mui/material";

function FileUploadContainer() {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);
  const [askLoading, setAskLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    setUploadLoading(true); // Show the loading icon for the Upload button
    const response = await axios.post("https://ai-document-query-backend-2.onrender.com/api/upload/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setContent(response.data.content);
    setUploadLoading(false); // Hide the loading icon
  };

  const handleQuestion = async () => {
    setAskLoading(true); // Show the loading icon for the Ask button
    const response = await axios.post("https://ai-document-query-backend-2.onrender.com/api/qa/", {
      content: content,
      question: question,
    });

    setAnswer(response.data.answer);
    setAskLoading(false); // Hide the loading icon
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        width: "100%",
        padding: 2,
      }}
    >
      <Card sx={{ padding: 3, width: "100%", maxWidth: "1200px", boxShadow: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Document Upload and Question Answering
        </Typography>

        <FileUploadInput onFileChange={handleFileChange} />

        {/* Upload Button */}
        {uploadLoading ? (
          <CircularProgress sx={{ display: "block", margin: "0 auto", mb: 2 }} />
        ) : (
          <UploadButton onClick={handleUpload} />
        )}

        <UploadedContent content={content} />

        <QuestionInput value={question} onChange={(e) => setQuestion(e.target.value)} />

        {/* Ask Button */}
        {askLoading ? (
          <CircularProgress sx={{ display: "block", margin: "0 auto", mt: 2 }} />
        ) : (
          <AskButton onClick={handleQuestion} />
        )}

        <AnswerDisplay answer={answer} />
      </Card>
    </Box>
  );
}

export default FileUploadContainer;
