import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const Greet = () => {
  const [date, setDate] = useState();
  const [greetText, setGreetText] = useState("");
  const [time, setTime] = useState({ hh: 0, mm: 0 });
  const weekday = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const welcomeTypes = ["Good Morning", "Good Afternoon", "Good Evening"];
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  useEffect(
    () => setDate(new Date()),
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      date &&
        setTime({
          ...time,
          hh: checkTime(date.getHours()) % 12 || 12,
          mm: checkTime(date.getMinutes()),
        });
    },
    // eslint-disable-next-line
    [date]
  );
  useEffect(
    () => {
      if (date) {
        if (date.getHours() < 12) setGreetText(welcomeTypes[0]);
        else if (date.getHours() < 18) setGreetText(welcomeTypes[1]);
        else setGreetText(welcomeTypes[2]);
      }
    },
    // eslint-disable-next-line
    [date]
  );

  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={3}>
      <Typography
        align="center"
        variant="h4"
        m={1}
        sx={{
          fontSize: { xs: 1.7 + "rem", md: 2 + "rem", lg: 2.5 + "rem" },
        }}>{`${greetText}, Dear`}</Typography>
      {date && (
        <>
          <Button variant="outlined" sx={{ m: 1 }}>
            <Typography variant="p">{`${
              weekday[date.getDay()]
            }, ${date.getDate()} ${months[date.getMonth()]} `}</Typography>
          </Button>

          <Button variant="outlined">
            <Typography variant="p">{`${time.hh}:${time.mm} ${date
              .toLocaleTimeString()
              .slice(8)} `}</Typography>
          </Button>
        </>
      )}
      <img src="./welcome.jpeg" className="home-img" alt="img"></img>
    </Box>
  );
};

export default Greet;
