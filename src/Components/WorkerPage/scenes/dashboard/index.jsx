import React from 'react';
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockEvents } from "../../data/mockData";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SOSButton from "../../components/SOSbutton";

const DashboardComponent = ({ isAdmin }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle={`Welcome, ${isAdmin ? 'ADMIN' : 'SCRAP DELIVERY PARTNER'}`} />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="E-Waste Disposed (Tons)"
            progress="0.75"
            increase="+14%"
            icon={<DeleteOutlineIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="₹4,31,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="3,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
       <StatBox
            title="1,325,134"
            subtitle="Traffic Recieved"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>


        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                My Progress
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                59K Ton
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Disposal Requests
            </Typography>
          </Box>
          {mockEvents.map((event, i) => (
            <Box
              key={`${event.client}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"  // Adjusted alignItems to 'flex-start'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {event.client}
                </Typography>
              </Box>
              <Box 
                color={colors.grey[100]}
                sx={{
                  flex: 1, // This allows the date to take up the remaining space
                  textAlign: "center", // Center-align the text
                }}
              >
                {event.date}
              </Box>
              <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: colors.greenAccent[500] }}
              >
                {event.req}
              </Button>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        
      
        
      </Box>
      <SOSButton />
    </Box>

  );
};

export default DashboardComponent;

// Usage in AdminDashboard.jsx and WorkerDashboard.jsx remains the same as provided in the previous response.
