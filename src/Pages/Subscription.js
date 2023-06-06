import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap={3}
          sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Subscription() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navTo = useNavigate();
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
          Subscription
        </Typography>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab
              sx={{
                pl: { xs: 2, md: 20 },
                pr: { xs: 2, md: 20 },
                color: "text.primary",
                fontWeight: "bold",
              }}
              label="Community"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                pl: { xs: 2, md: 20 },
                pr: { xs: 2, md: 20 },
                color: "text.primary",
                fontWeight: "bold",
              }}
              label="Pro"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                pl: { xs: 2, md: 20 },
                pr: { xs: 2, md: 20 },
                color: "text.primary",
                fontWeight: "bold",
              }}
              label="Premium"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography>
            Get started with community. Enjoy free meditation at zero cost.
          </Typography>
          <Stack alignItems="center" direction="row">
            <Typography variant="h4" color="#2CA24D">
              $0
            </Typography>
            <Typography variant="p" color="#2CA24D">
              - Free forever
            </Typography>
          </Stack>
          <Button variant="contained">Explore Now</Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography>
            Get started with breathly pro and enjoy lots of more features of
            meditation.{" "}
          </Typography>
          <Stack alignItems="center" direction="row">
            <Typography variant="h4" color="#3990FF">
              $15
            </Typography>
            <Typography variant="p" color="#3990FF">
              /month
            </Typography>
          </Stack>
          <Button variant="contained">BUY PRO</Button>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography>
            Get started with breathly premium & enjoy the most advanced features
            of meditation, as well as the highest priority for support.
          </Typography>
          <Stack alignItems="center" direction="row">
            <Typography variant="h4" color="#3990FF">
              $25
            </Typography>
            <Typography variant="p" color="#3990FF">
              /month
            </Typography>
          </Stack>
          <Button variant="contained">BUY PREMIUM</Button>
        </TabPanel>
      </Box>
    </Container>
  );
}
