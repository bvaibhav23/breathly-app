import React from "react";
import { Box, Typography } from "@mui/material";
import FooterList from "./FooterList";
const Footer = () => {
  const data = [
    {
      title: "Daily Meditation",
      list: ["Sleep", "Relax", "Calm", "Mental Health"],
    },
    {
      title: "Sleep Meditation",
      list: [
        "Peaceful Sleep",
        "Gratitude sleep",
        "Night Gratitude",
        "Deep Sleep",
      ],
    },
    {
      title: "Relax Meditation",
      list: ["Sleep Relaxation", "Mental Relax", "Nature Relax", "Sky Walk"],
    },
    {
      title: "Calm Meditation",
      list: ["Mental Health", "Mind Therapy", "Heaven", "Mentally Relax"],
    },
  ];

  return (
    <Box
      width="100%"
      bgcolor="#024"
      color="#fff"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-evenly"
      component="footer"
      p={3}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
        borderBottom={1}
        m={1}
        pb={2}>
        <FooterList data={data} />
      </Box>
      <Typography variant="p" m={1} align="center">
        © 2023 Breathings. All Rights Reserved!
      </Typography>
      <Typography variant="p" m={1} pb={2} align="center">
        Privacy Policy Cookie Policy
      </Typography>
    </Box>
  );
};

export default Footer;
