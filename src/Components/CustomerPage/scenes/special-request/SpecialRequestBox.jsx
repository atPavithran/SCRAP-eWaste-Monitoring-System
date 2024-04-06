import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const SpecialRequestBox = () => {
  const [requestDate, setRequestDate] = useState("");
  const [estimatedQuantity, setEstimatedQuantity] = useState("");

  const handleRequestSubmit = () => {
    // Add logic to handle special request submission
    console.log("Submit button clicked");
    console.log("Date:", requestDate);
    console.log("Estimated Quantity:", estimatedQuantity);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
      <Typography variant="h5" fontWeight="600" mb={2} color="#007bff">
        Special Request
      </Typography>
      <TextField
        label="Request Date"
        type="date"
        variant="outlined"
        fullWidth
        mb={2}
        value={requestDate}
        onChange={(e) => setRequestDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          style: { borderRadius: 8 },
        }}
        helperText="Enter date in DD-MM-YYYY format"
      />
      <TextField
        label="Estimated Quantity"
        type="number"
        variant="outlined"
        fullWidth
        mb={2}
        value={estimatedQuantity}
        onChange={(e) => setEstimatedQuantity(e.target.value)}
        InputProps={{
          style: { borderRadius: 8 },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRequestSubmit}
        style={{ borderRadius: 8, backgroundColor: "#007bff", color: "#0d1f3d" }}
      >
        Submit Request
      </Button>
    </Paper>
  );
};

export default SpecialRequestBox;
