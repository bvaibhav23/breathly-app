import { Stack, Typography } from "@mui/material";
import React from "react";

const FooterList = ({ data }) => {
  // console.log(data)
  return (
    <>
      {data.map((ele, i) => {
        return (
          <Stack p={1} key={ele.title}>
            <Typography
              key={i + 10}
              variant="p"
              fontWeight="bold"
              pb={1}
              borderBottom={1}
              noWrap={false}>
              {" "}
              {ele.title}{" "}
            </Typography>
            {ele.list.map((e, i) => (
              <Typography key={i} variant="p" mt={1} mb={1}>
                {" "}
                {e}{" "}
              </Typography>
            ))}
          </Stack>
        );
      })}
    </>
  );
};

export default FooterList;
