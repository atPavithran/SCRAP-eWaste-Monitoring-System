import Calendar from '../calendar/calendar'; 
import SpecialRequestBox from '../special-request/SpecialRequestBox';
import SubscriptionBox from '../subscription/SubscriptionBox';
import { Box } from '@mui/material';
import Header from "../../components/Header";

const Dashboard = () => {

  return (
    <Box m="20px">

      <Header title="Dashboard" />

      <Box>
      
        <Box>
          <Calendar />
        </Box>

        <Box>
          <SpecialRequestBox />  
        </Box>

        <Box>
          <SubscriptionBox />
        </Box>

      </Box>

    </Box>
  );

}

export default Dashboard;