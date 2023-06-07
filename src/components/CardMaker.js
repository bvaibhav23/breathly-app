import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function DisplayCard({ ele }) {
  const navTo = useNavigate();
  const location = useLocation();

  return (
    <>
      {ele && (
        <Card
          // onClick={() => console.log("card", ele)}
          sx={{
            m: 1,
            width: {
              xs: 10 + "rem",
              md: 18 + "rem",
              lg: 18 + "rem",
              xl: 20 + "rem",
            },
            height: { xs: 16 + "rem", md: 12 + "rem", lg: 15 + "rem" },
          }}>
          <CardActionArea
            onClick={() => {
              location.pathname === "/" ||
              location.pathname === "/meditation" ||
              location.pathname === "/relax"
                ? navTo(`/songs/${ele.id}`, true)
                : navTo(`/sleepsongs/${ele.id}`, true);
            }}>
            <CardMedia
              component="img"
              height="140"
              image={ele.img}
              alt={ele.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {ele.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                William Parker
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
