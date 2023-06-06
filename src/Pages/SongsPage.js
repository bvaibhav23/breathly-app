import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/Data";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
const SongsPage = () => {
  const { id } = useParams();
  const [disp, setDsip] = useState();
  useEffect(() => {
    setDsip(
      data.find(
        (ele) =>
          // eslint-disable-next-line
          ele.id == id
      )
    );
  }, [id]);
  //   console.log("disp", disp);
  return (
    <Container
      maxWidth={false}
      sx={{
        background:
          "linear-gradient(64.3deg,rgba(254,122,152,.81) 17.7%,rgba(255,206,134,1) 64.7%,rgba(172,253,163,.64) 112.1%)",
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
            {disp.audio.map((a, i) => (
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

export default SongsPage;
