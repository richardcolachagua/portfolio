import React from "react";
import { Typography, Box } from "@mui/material";

const Learning = () => {
  return (
    <Box
      sx={{
        backgroundImage: "assets/learning.png",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        Learning is a lifelong process. You never stop learning.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        Bob Proctor
      </Typography>
    </Box>
  );
};

export default Learning;
