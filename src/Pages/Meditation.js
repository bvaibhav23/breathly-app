import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import PageMaker from "./PageMaker";
import data from "../data/Data";

const Medication = () => {
  const tabLabels = ["All", "Nature", "Musical", "Category"];
  return (
    <Container sx={{ mt: 1 }} maxWidth="ms" disableGutters>
      <PageMaker title={"Meditation"} tabLabels={tabLabels} data={data} />
      <Footer />
    </Container>
  );
};

export default Medication;
