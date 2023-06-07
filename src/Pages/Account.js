import { Button, Container, Stack, Switch, Typography } from "@mui/material";
import React from "react";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Chip from "@mui/material/Chip";

import { useNavigate } from "react-router-dom";
import SettingComponent from "../components/SettingComponent";

const Account = () => {
  const navTo = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function FormDialog() {
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Verify your email</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your your email here for OTP
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Verify Now</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <Container maxWidth="ms" disableGutters sx={{ mt: 1, p: 1 }}>
      <Stack
        onClick={() => navTo("/setting")}
        direction="row"
        mt={2}
        mb={2}
        sx={{ color: "text.secondary", cursor: "pointer" }}>
        <ArrowBackIosNewOutlinedIcon />
        <Typography variant="p" fontWeight="bold">
          {" "}
          Account
        </Typography>
      </Stack>
      <SettingComponent
        title="Your Name"
        leftIcon={<Person2OutlinedIcon />}
        rightContent={
          <Typography variant="p" color="text.secondary" fontSize={15}>
            Vaibhav Bhaskar
          </Typography>
        }
      />
      <SettingComponent
        title="You signed in as"
        leftIcon={<ExitToAppOutlinedIcon />}
        rightContent={
          <>
            <Chip
              onClick={() => handleClickOpen()}
              label="Unverified"
              color="error"
              size="small"
            />
            <FormDialog />
          </>
        }
      />
      <SettingComponent
        title="Change your password"
        leftIcon={<LockOpenOutlinedIcon />}
      />
      <SettingComponent
        title="Sync with Google Fit"
        leftIcon={<SyncOutlinedIcon />}
        rightIcon={<Switch defaultChecked />}
      />
    </Container>
  );
};

export default Account;
