import React from "react";
import {
  Box,
  Stack,
  Button,
  Typography,
  Tab,
  Tabs,
  Container,
} from "@mui/material";
import PropTypes from "prop-types";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import CardsContainer from "../components/CardsContainer";
import { useNavigate } from "react-router-dom";
import MelodyContainer from "../components/MelodyContainer";

const PageMaker = ({ title, tabLabels, data }) => {
  const [value, setValue] = React.useState(0);
  const navTo = useNavigate();
  // console.log(data);
  const handleChange = (newValue) => {
    // console.log(newValue.target.id[11]);
    setValue(Number(newValue.target.id[11]));
  };
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        color="#00008b">
        <ArrowBackIosNewOutlinedIcon
          sx={{ cursor: "pointer" }}
          onClick={() => navTo("/")}
        />
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <AccessAlarmOutlinedIcon />
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={(e) => handleChange(e)}
            aria-label="basic tabs example"
            centered>
            {tabLabels.map((ele, i) => (
              <Tab
                key={ele}
                label={ele}
                {...a11yProps(i)}
                sx={{
                  pl: { xs: 2, md: 15 },
                  pr: { xs: 2, md: 15 },
                  color: "text.primary",
                }}
              />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {title === "Relax" && (
            <Button
              variant="contained"
              sx={{ ml: "auto", mr: "auto", mt: 3, mb: 3, width: "50%" }}
              onClick={() => navTo("/melodies")}>
              {" "}
              Melodies
            </Button>
          )}
          {title === "Melodies" ? (
            <MelodyContainer data={data} />
          ) : (
            <CardsContainer data={data} />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {` ${tabLabels[1]} Works`}{" "}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {` ${tabLabels[2]} Works`}{" "}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {` ${tabLabels[3]} Works`}{" "}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default PageMaker;

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
        <Container
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "70vh",
          }}
          maxWidth="ms"
          disableGutters>
          {children}
        </Container>
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
