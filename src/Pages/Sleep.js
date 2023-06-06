import { Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import PageMaker from "./PageMaker";
import { sleep } from "../data/Data";

const Sleep = () => {
  const tabLabels = ["All", "MyFavorite", "Stories", "Music"];

  return (
    <Container sx={{ mt: 1 }} maxWidth="ms" disableGutters>
      <PageMaker title={"Sleep"} tabLabels={tabLabels} data={sleep} />
      <Footer />
    </Container>
  );
};

export default Sleep;
