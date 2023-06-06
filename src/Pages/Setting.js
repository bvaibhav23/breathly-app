import { Container, Stack, Switch, Typography } from "@mui/material";
import React from "react";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DoNotDisturbOutlinedIcon from "@mui/icons-material/DoNotDisturbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

import { useNavigate } from "react-router-dom";
import SettingComponent from "../components/SettingComponent";

const Setting = () => {
  const navTo = useNavigate();
  return (
    <Container maxWidth="ms" disableGutters sx={{ mt: 1, p: 1 }}>
      <Stack
        onClick={() => navTo("/")}
        direction="row"
        mt={2}
        mb={2}
        sx={{ color: "text.secondary", cursor: "pointer" }}>
        <ArrowBackIosNewOutlinedIcon />
        <Typography variant="p" fontWeight="bold">
          {" "}
          Settings
        </Typography>
      </Stack>
      <SettingComponent
        nav="/account"
        title="Account"
        leftIcon={<Person2OutlinedIcon />}
      />
      <SettingComponent
        nav="/subscription"
        title="Manage Subscription"
        leftIcon={<SubscriptionsOutlinedIcon />}
      />
      <SettingComponent
        title="Reminders"
        leftIcon={<DateRangeOutlinedIcon />}
      />
      <SettingComponent
        title="Download over cellular"
        leftIcon={<DownloadOutlinedIcon />}
        rightIcon={<Switch defaultChecked />}
      />
      <SettingComponent
        title="Enable Dark Mode"
        leftIcon={<DarkModeOutlinedIcon />}
        rightIcon={<Switch />}
      />
      <SettingComponent
        title="Do Not Disturb"
        leftIcon={<DoNotDisturbOutlinedIcon />}
        rightIcon={<Switch />}
      />
      <SettingComponent
        title="Push Notification"
        leftIcon={<NotificationsNoneOutlinedIcon />}
        rightIcon={<Switch />}
      />
      <SettingComponent
        title="Support"
        leftIcon={<SupportAgentOutlinedIcon />}
      />
      <SettingComponent title="About" leftIcon={<InfoOutlinedIcon />} />
      <SettingComponent
        title="Privacy Policy"
        leftIcon={<LockOpenOutlinedIcon />}
      />
      <SettingComponent
        title="Terms & Conditions"
        leftIcon={<GavelOutlinedIcon />}
      />
      <Typography align="center" color="primary">
        Version 1.0
      </Typography>
    </Container>
  );
};

export default Setting;
