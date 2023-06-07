import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sleep } from "../data/Data";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
const SleepSong = () => {
  const { songid } = useParams();
  const [disp, setDsip] = useState([]);
  useEffect(() => {
    setDsip(
      sleep.find(
        (ele) =>
          // eslint-disable-next-line
          ele.id == songid
      )
    );
  }, [songid]);
  // console.log(sleep);
  // console.log("disp", disp);
  return (
    <Container
      maxWidth={false}
      sx={{
        background:
          "radial-gradient(circle,rgba(238,174,202,1) 0%,rgba(236,175,203,1) 3%,rgba(233,175,204,1) 6%,rgba(233,175,204,1) 6%,rgba(148,187,233,1) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: { xs: 87 + "vh", md: 95 + "vh" },

        p: 1,
      }}>
      {disp && (
        <>
          <Stack
            direction="row"
            alignItems="center"
            mt={3}
            spacing={1}
            color={"darkblue"}>
            <SelfImprovementIcon fontSize="large" />{" "}
            <Typography variant="h5" fontSize={1.75 + "rem"} fontWeight="bold">
              {disp.title}
            </Typography>
          </Stack>
          <img src={disp.img} className="songImg" alt={disp.title} />
          <Typography variant="h6" fontSize={1.5 + "rem"}>
            Live From Space
          </Typography>
          <Typography variant="p" sx={{ color: "text.secondary" }}>
            Mr.Vaibhav Bhaskar
          </Typography>
          <Stack mt={5} spacing={5}>
            {disp.audio &&
              disp.audio.map((a, i) => (
                <audio key={i + 50} controls src={a}></audio>
              ))}
          </Stack>
          <Stack
            direction="row"
            sx={{ mt: { md: 3, xs: 5 } }}
            spacing={5}
            alignItems="center">
            <FavoriteBorderOutlinedIcon />
            <PlaylistAddOutlinedIcon />
            <AccessAlarmOutlinedIcon />
            <MoreVertOutlinedIcon />
          </Stack>
        </>
      )}
    </Container>
  );
};

export default SleepSong;
