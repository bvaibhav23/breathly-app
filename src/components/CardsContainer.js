import { Box } from "@mui/material";
import React from "react";
import DisplayCard from "./CardMaker";

const CardsContainer = ({ data }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-evenly">
      {data.map((ele, i) => (
        <DisplayCard key={i} ele={ele} />
      ))}
    </Box>
  );
};

export default CardsContainer;
