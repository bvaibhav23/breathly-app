import React from "react";

import { Box, Typography, Stack } from "@mui/material";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";

import Greet from "../components/Greet";
import Footer from "../components/Footer";
import CardsContainer from "../components/CardsContainer";
import data from "../data/Data";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        component="main">
        <Greet />
      </Box>
      <Stack
        direction="row"
        borderBottom={1}
        pb={1}
        mb={1}
        width={"95%"}
        color="#00008b">
        <SpaOutlinedIcon />{" "}
        <Typography variant="h5" ml={1} fontWeight="bold">
          Medication
        </Typography>
      </Stack>

      <CardsContainer data={data} />
      <Footer />
    </>
  );
};

export default Home;
