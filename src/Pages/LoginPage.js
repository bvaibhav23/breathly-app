import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navTo = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        width: { xs: "80%", sm: "80%", md: "25%" },
        boxShadow: 3,
        p: 3,
        borderRadius: 2,
        mt: 3,
      }}
      m="auto"
      gap={2}>
      <ArrowBackIcon
        onClick={() => navTo("/first")}
        sx={{ cursor: "pointer", boxShadow: 3, borderRadius: "50%" }}
      />
      <img
        src="https://breathlly.netlify.app/assets/logo.png"
        style={{
          border: ".1rem solid blue",
          borderRadius: "50%",
          padding: ".2rem",
        }}
        width="60vh"
        height="60vh"
        alt="logo"
      />

      <Typography variant="h5" fontWeight="bold">
        Create your account
      </Typography>
      <Button
        fullWidth
        variant="contained"
        sx={{ pt: ".5rem", pb: ".5rem", borderRadius: 15, fontWeight: "bold" }}>
        <Avatar
          sx={{ width: 24, height: 24, mr: 1 }}
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
        />{" "}
        Continue with Facebook
      </Button>
      <Button
        fullWidth
        variant="outlined"
        sx={{ pt: ".5rem", pb: ".5rem", borderRadius: 15, fontWeight: "bold" }}>
        <Avatar
          sx={{ width: 24, height: 24, mr: 1 }}
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
        />
        Continue with Google
      </Button>
      <Typography>
        (OR)
        <Typography
          pl={1}
          color="text.secondary"
          fontWeight="bold"
          variant="span">
          LOGIN WITH EMAIL
        </Typography>
      </Typography>
      <TextField
        required
        fullWidth
        sx={{ borderRadius: 15 }}
        id="outlined-required"
        label="Email Address"
      />
      <TextField
        required
        id="outlined-required"
        type="password"
        label="Password"
        fullWidth
      />
      <Button variant="contained" sx={{ borderRadius: 10 }} fullWidth>
        Get Started
      </Button>
      <Link style={{ color: "blue" }}>Forget Password</Link>

      <Typography>
        New User?
        <Typography pl={1} variant="span">
          <Link to="/signup" style={{ color: "blue", fontWeight: "bold" }}>
            SIGN IN
          </Link>
        </Typography>
      </Typography>
    </Box>
  );
};

export default LoginPage;
