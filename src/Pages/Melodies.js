import React from "react";

import { Container } from "@mui/material";
import Footer from "../components/Footer";
import PageMaker from "./PageMaker";

const Melodies = () => {
  const tabLabels = ["All", "Nature", "Musical", "Category"];
  const melodies = [
    "Birds",
    "Wind",
    "Rain",
    "Tornado",
    "Lake",
    "Ocean",
    "Snow",
    "Hazzard",
    "Waterfall",
    "Forest",
    "Night",
    "Sand",
    "Nature",
    "Relax",
  ];
  const data = melodies.map((ele) => {
    return {
      title: ele,
      audio: new Audio(
        `https://breathlly.netlify.app/assets/Melodies/${ele}.mp3`
      ),
    };
  });

  return (
    <Container sx={{ height: 90 + "vh", mt: 1 }} maxWidth="ms" disableGutters>
      <PageMaker title={"Melodies"} tabLabels={tabLabels} data={data} />
      <Footer />
    </Container>
  );
};

export default Melodies;
