import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import { colors } from "@mui/material";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default Geography;
