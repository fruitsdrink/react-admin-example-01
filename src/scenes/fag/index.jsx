import React from "react";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            corrupti culpa veritatis animi porro magni, dolore vero, explicabo
            dolorum velit nulla sunt libero quis ipsam. Unde ex aut officiis id.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            corrupti culpa veritatis animi porro magni, dolore vero, explicabo
            dolorum velit nulla sunt libero quis ipsam. Unde ex aut officiis id.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            corrupti culpa veritatis animi porro magni, dolore vero, explicabo
            dolorum velit nulla sunt libero quis ipsam. Unde ex aut officiis id.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            corrupti culpa veritatis animi porro magni, dolore vero, explicabo
            dolorum velit nulla sunt libero quis ipsam. Unde ex aut officiis id.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            corrupti culpa veritatis animi porro magni, dolore vero, explicabo
            dolorum velit nulla sunt libero quis ipsam. Unde ex aut officiis id.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            corrupti culpa veritatis animi porro magni, dolore vero, explicabo
            dolorum velit nulla sunt libero quis ipsam. Unde ex aut officiis id.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Importan question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            corrupti culpa veritatis animi porro magni, dolore vero, explicabo
            dolorum velit nulla sunt libero quis ipsam. Unde ex aut officiis id.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
