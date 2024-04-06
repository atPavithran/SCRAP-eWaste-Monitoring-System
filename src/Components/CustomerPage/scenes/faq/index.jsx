import React, { useState } from "react";
import { Box, useTheme, Button, TextField } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FeedbackForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // Handle the submission of feedback, e.g., send it to a server or store it locally.
    console.log("Feedback submitted:", feedback);
    // You can add further logic for handling the feedback data.
  };

  return (
    <Box m="20px">
      <Header title="Feedback" subtitle="Community Response" />

      <TextField
        label="Your Feedback"
        variant="outlined"
        multiline
        fullWidth
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        style={{ marginBottom: "16px" }}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Feedback
      </Button>

      {/* Previous feedback accordions can be added here if needed */}
    </Box>
  );
};

export default FeedbackForm;
