import { Box, Typography } from "@mui/material";
import React from "react";

const MelodyContainer = ({ data }) => {
  //   console.log(data);

  const audioHandle = (ele, e) => {
    if (ele.audio.paused) {
      ele.audio.play();
      e.target.className =
        "MelodyContainer.js:11 MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter songSelector css-1nloo4s-MuiTypography-root";
    } else {
      if (ele.audio.play() !== undefined) {
        /* To AVOID
         * the play() request was interrupted by a call to pause() */
        ele.audio
          .play()
          .then((_) => {
            //
            // Automatic playback started!
            // Show playing UI.
            // We can now safely pause audio...
            ele.audio.pause();
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log(error);
          });
      }
      if (e.target.className.includes("songSelector")) {
        e.target.className =
          "MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter css-1nloo4s-MuiTypography-root";
      }
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "80vh", md: "70vh" },
        background:
          "linear-gradient(1.8deg,rgba(0,116,117,1) 50.2%,rgba(232,232,232,1) 100%)",
        p: { md: 7 },
      }}
      gap={3}>
      {data.map((ele) => {
        //   ele.title
        return (
          <Typography
            key={ele.title}
            onClick={(e) => audioHandle(ele, e)}
            sx={{
              border: "1px solid white",
              borderRadius: "50%",
              width: "7rem",
              height: "7rem",
              pt: 5,
              m: 0,
              cursor: "pointer",
            }}
            align="center"
            pt={3}>
            {ele.title}
          </Typography>
        );
      })}
    </Box>
  );
};

export default MelodyContainer;
