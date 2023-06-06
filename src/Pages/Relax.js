import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import PageMaker from "./PageMaker";
import data from "../data/Data";

const Relax = () => {
  const tabLabels = ["All", "Favorite", "Beginners  ", "Self-calm"];
  return (
    <Container sx={{ mt: 1 }} maxWidth="ms" disableGutters>
      <PageMaker title={"Relax"} tabLabels={tabLabels} data={data} />
      <Footer />
    </Container>
  );
};

export default Relax;
