import React from "react";
import { Typography, Box, Container, Grid, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TechStack from "../components/TechStack";
import DesignStack from "../components/DesignStack";
import Contact from "../components/Contact";
import Websites from "../components/Websites/Websites";

const Homepage = () => {
  const defaultTheme = createTheme();

  return (
    <Box
      sx={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      \
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "silver",
              paddingRight: "120px",
            }}
          >
            Hello. My name is Richard Colachagua. I am a New York City Based
            Software Engineer
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "helvetica",
            }}
          >
            About Me
          </Typography>
          <Typography
            sx={{
              fontSize: "32px",
              fontFamily: "helvetica",
              fontWeight: "bold",
              color: "peru",
            }}
          >
            I have always had a natural curosity of learning, and in 2021, I
            left the marketng career I had started to carve out for myself to
            venture into the tech industry. I had watched a tutorial here and
            there, asked a friend how to get started, and one day took the
            plunge. I've been studying and working small jobs since.
          </Typography>
          <Typography
            sx={{
              fontSize: "32px",
              fontFamily: "helvetica",
              fontWeight: "bold",
              color: "peru",
            }}
          >
            Having a graphic design background gives me a plus as a software
            engineer as it helps me understand frontend web development from
            more than one perspective.
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <TechStack />
              </Grid>
              <Grid item xs={8}>
                <DesignStack />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ paddingTop: "1000px" }}>
            <Websites />
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Homepage;
