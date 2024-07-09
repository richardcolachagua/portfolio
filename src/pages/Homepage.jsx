import React from "react";
import { Typography, Grid, Box } from "@mui/material";

const Homepage = () => {
  return (
    <div>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "silver",
          }}
        >
          Hello. My name is Richard Colachagua. I am a New York City Based
          Software Engineer
        </Typography>
        <Typography sx={{ fontSize: "12px", fontFamily: "helvetica" }}>
          I have always had a natural curosity of learning, and in 2021 I left
          the marketng career I had started to carve out for myself to venture
          into the tech industry. I had watched a tutorial here and there, asked
          a friend how to get started, and one day took the plunge. I've been
          studying and working small jobs since.
        </Typography>
        <Typography sx={{ fontSize: "12px", fontFamily: "helvetica" }}>
          Having a graphic design background gives me a plus as a software
          engineer as it helps me understand frontend web development from more
          than one perspective.
        </Typography>
      </Box>
    </div>
  );
};

export default Homepage;
