import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Feedback" subtitle="Community Response" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ⭐⭐⭐⭐
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Solid app with useful features. I love the convenience of monitoring eWaste disposal, but there's room for improvement in terms of additional educational content on eWaste management.
           Overall, a good effort!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ⭐⭐⭐⭐⭐
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Fantastic app! The user interface is intuitive, and I appreciate the real-time tracking of eWaste disposal.
           It's a great initiative towards environmental sustainability. Keep up the excellent work!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ⭐⭐
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Needs improvement. The concept is good, but the app lacks a polished look and feels a bit clunky. The information provided is basic,
           and I believe there's potential for more engaging features. Looking forward to updates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ⭐⭐⭐⭐
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Great start! The app offers a user-friendly experience for eWaste monitoring. I appreciate the simplicity and effectiveness.
           Adding more in-depth educational content would make it even better. Keep up the good work!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          ⭐⭐⭐
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Decent app, but I've encountered some bugs while navigating through different sections. It would be great if these issues are addressed in future updates.
           Also, consider adding more visual elements to enhance the overall experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
