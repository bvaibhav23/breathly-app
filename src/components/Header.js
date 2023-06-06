import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Stack } from "@mui/system";
import welcomeLogo from "../welcome.jpeg";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import { Route, Routes, useNavigate } from "react-router-dom";
import Meditation from "../Pages/Meditation";
import Relax from "../Pages/Relax";
import Sleep from "../Pages/Sleep";
import Setting from "../Pages/Setting";
import Home from "../Pages/Home";
import SongsPage from "../Pages/SongsPage";
import Melodies from "../Pages/Melodies";
import Account from "../Pages/Account";
import Subscription from "../Pages/Subscription";

function Header() {
  const [open, setOpen] = useState(false);
  const navTo = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMsgClick = () => {
    setOpen(true);
  };

  const handleMsgClose = () => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleMsgClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      <CssBaseline />
      <AppBar position="static" component="nav">
        <Toolbar>
          <Avatar
            alt="Breathly Logo"
            src={welcomeLogo}
            sx={{ width: 2.2 + "rem", height: 2.2 + "rem", borderRadius: 2 }}
          />
          <Typography
            variant="h6"
            fontWeight="bold"
            ml={1}
            onClick={() => navTo("/")}
            sx={{ flexGrow: 1, cursor: "pointer" }}>
            Breathly
          </Typography>

          <Stack
            direction="row"
            sx={{ display: { xs: "block ", sm: "block" } }}>
            <IconButton
              size="large"
              aria-label="Meditation class is live! Click Here to Join!"
              color="inherit"
              onClick={handleMsgClick}>
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <AccountCircle color="primary" sx={{ mr: 1 }} />
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navTo("/account");
                  }}>
                  <AccountBalanceOutlinedIcon color="primary" sx={{ mr: 1 }} />
                  My account
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navTo("/first");
                  }}>
                  <LogoutOutlinedIcon color="primary" sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          </Stack>
        </Toolbar>
      </AppBar>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        sx={{
          ".MuiSnackbarContent-root": { backgroundColor: "rgb(170, 3, 170)" },
        }}
        message="Meditation class is live! Click Here to Join!"
        action={action}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/relax" element={<Relax />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/setting" element={<Setting />} />
        <Route path={`/songs/:id`} element={<SongsPage />} />
        <Route path="/melodies" element={<Melodies />} />
        <Route path="/account" element={<Account />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Box>
  );
}

export default Header;
