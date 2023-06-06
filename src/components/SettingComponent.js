import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useNavigate } from "react-router-dom";

const SettingComponent = ({
  nav = "",
  leftIcon,
  title,
  rightIcon = <ArrowForwardIosOutlinedIcon />,
  rightContent = "",
}) => {
  const navTo = useNavigate();
  return (
    <List
      sx={{ cursor: nav ? "pointer" : "text", m: 0, p: 0 }}
      onClick={() => nav && navTo(`${nav}`)}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            {rightIcon}
          </IconButton>
        }>
        <ListItemAvatar>
          <Avatar sx={{ color: "#1976d2", bgcolor: "white", boxShadow: 3 }}>
            {leftIcon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary="" />
        {rightContent}
      </ListItem>
    </List>
  );
};

export default SettingComponent;
