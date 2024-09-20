import React from "react";
import { Typography, Box } from "@mui/material";

const Learning = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/assets/learning.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
        //opacity: 0.9,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Learning is a lifelong process. You never stop learning.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "40px",
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
