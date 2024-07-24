import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import WebsiteCard from "./WebsiteCard";

const websites = [
  { image: "", title: "" },
  { image: "", title: "" },
  { image: "", title: "" },
];

const Websites = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", padding: "40px 20px" }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{ color: "#FFFFFF", marginBottom: "40px" }}
      >
        Websites
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {websites.map((site, index) => (
          <Grid>
            <WebsiteCard image={site.image} title={site.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Websites;
