import React, { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";

// Plan data 
const plans = [
  {
    name: 'Monthly', 
    price: '₹ 1,44,000',
    duration: 'Annual'
  },
  {
    name: 'Quarterly',
    price: '₹ 54,000',
    duration: 'Annual'
  },
  {
    name: 'Yearly',
    price:'₹ 25,000', 
    duration: 'Annual'
  }
];

const SubscriptionBox = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
      <Typography variant="h5" color="#007bff" gutterBottom>
        Choose Your Plan
      </Typography>

      {plans.map((plan) => (
        <Paper
          key={plan.name}
          onClick={() => handlePlanSelect(plan)}
          elevation={selectedPlan === plan ? 5 : 1}
          style={{
            padding: "10px",
            marginBottom: "10px",
            cursor: "pointer",
            backgroundColor: selectedPlan === plan ? "#007bff" : "white",
            borderRadius: "8px",
          }}
        >
          {/* plan details */}
          <Typography variant="h6" style={{ marginBottom: "8px", color: selectedPlan === plan ? "white" : "black" }}>
            {plan.name}
          </Typography>
          <Typography style={{ color: selectedPlan === plan ? "white" : "black" }}>
            Price: ${plan.price} per {plan.duration}
          </Typography>
        </Paper>
      ))}

      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: "8px", marginTop: "20px", backgroundColor: "#007bff", color: "white" }}
      >
        Subscribe to {selectedPlan.name}
      </Button>
    </Paper>
  );
};

export default SubscriptionBox;
