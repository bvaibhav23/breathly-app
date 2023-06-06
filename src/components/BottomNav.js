import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const navTo = useNavigate();
  const location = useLocation().pathname;
  useEffect(() => {
    if (location === "/sleep") setValue(1);
    else if (location === "/meditation") setValue(2);
    else if (location === "/relax" || location === "/melodies") setValue(3);
    else if (location === "/setting" || location === "/account") setValue(4);
    else setValue(0);
  }, [location]);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}>
        <BottomNavigation showLabels value={value}>
          <BottomNavigationAction
            label="Home"
            sx={{ fontWeight: "bold" }}
            onClick={() => {
              navTo("/");
            }}
            icon={<HomeOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Sleep"
            sx={{ fontWeight: "bold" }}
            onClick={() => {
              navTo("/sleep");
            }}
            icon={<BedtimeOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Medication"
            sx={{ fontWeight: "bold" }}
            onClick={() => {
              navTo("/meditation");
            }}
            icon={<SpaOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Relax"
            sx={{ fontWeight: "bold" }}
            onClick={() => {
              navTo("/relax");
            }}
            icon={<MusicNoteOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Setting"
            sx={{ fontWeight: "bold" }}
            onClick={() => {
              navTo("/setting");
            }}
            icon={<SettingsOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
