import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navTo = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
      bgcolor="#B4CDE6"
      gap={3}>
      <img
        src="https://breathlly.netlify.app/assets/logo.png"
        style={{
          border: ".1rem solid blue",
          borderRadius: "50%",
          padding: ".2rem",
        }}
        width="60vh"
        height="60vh"
        alt="logo"></img>
      <img
        src="https://breathlly.netlify.app/assets/relax5.webp"
        style={{
          borderRadius: "50%",
        }}
        width="250rem"
        height="250rem"
        alt="logo"></img>
      <Typography variant="h4" fontWeight="bold">
        Breathings
      </Typography>
      <Typography variant="p" fontWeight="bold">
        Mindful Breathing app
      </Typography>
      <Button
        variant="contained"
        onClick={() => navTo("/signup")}
        sx={{ pl: "3rem", pr: "3rem", borderRadius: 5, fontWeight: "bold" }}>
        Sign Up
      </Button>
      <Typography>
        Already have an account?
        <Typography pl={1} variant="span">
          <Link to="/login" style={{ color: "blue", fontWeight: "bold" }}>
            LOG IN
          </Link>
        </Typography>
      </Typography>
    </Box>
  );
};

export default FirstPage;
