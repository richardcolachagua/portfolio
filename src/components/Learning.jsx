import React from "react";
import { Typography, Box } from "@mui/material";

const Learning = () => {
  return (
    <Box
      sx={{
        backgroundImage: ``,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        Learning is a lifelong process. You never stop learning.
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Bob Proctor
      </Typography>
    </Box>
  );
};

export default Learning;
