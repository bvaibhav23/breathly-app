import { Box } from "@mui/material";
import React from "react";
import DisplayCard from "./CardMaker";

const FavCardContainer = ({ data }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-evenly">
      {data &&
        data.map((ele, i) => ele.fav && <DisplayCard key={i} ele={ele} />)}
    </Box>
  );
};

export default FavCardContainer;
