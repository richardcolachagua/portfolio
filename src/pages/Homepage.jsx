import React from "react";
import { Typography, Grid, Box, Container, Stack } from "@mui/material";
import TechStack from "../components/TechStack";
import DesignStack from "../components/DesignStack";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <Container>
      <Grid>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "silver",
              paddingRight: "20px",
            }}
          >
            Hello. My name is Richard Colachagua. I am a New York City Based
            Software Engineer
          </Typography>
          <Typography sx={{ fontSize: "8px", fontFamily: "helvetica" }}>
            About Me
          </Typography>
          <Typography sx={{ fontSize: "12px", fontFamily: "helvetica" }}>
            I have always had a natural curosity of learning, and in 2021 I left
            the marketng career I had started to carve out for myself to venture
            into the tech industry. I had watched a tutorial here and there,
            asked a friend how to get started, and one day took the plunge. I've
            been studying and working small jobs since.
          </Typography>
          <Typography sx={{ fontSize: "12px", fontFamily: "helvetica" }}>
            Having a graphic design background gives me a plus as a software
            engineer as it helps me understand frontend web development from
            more than one perspective.
          </Typography>
        </Box>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <TechStack />

          <DesignStack />
        </Stack>
      </Grid>
    </Container>
  );
};

export default Homepage;
