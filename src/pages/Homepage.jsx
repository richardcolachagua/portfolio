import React from "react";
import { Typography, Box, Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Websites from "../components/Websites/Websites";
import ToolStacks from "../components/Stacks/ToolStack";
import VideoBackground from "../components/VideoBackground";
import About from "../components/About";

const Homepage = () => {
  const defaultTheme = createTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
        }}
      >
        <VideoBackground videoSrc="assets/new-york-skyline-manhattan.mp4">
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              paddingTop: "40px",
              fontSize: "130px",
              fontFamily: "Helvetica",
            }}
          >
            Richard Joel Colachagua
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              paddingTop: "40px",
              fontSize: "80px",
              fontFamily: "Helvetica",
            }}
          >
            New York City Based Software Engineer
          </Typography>
        </VideoBackground>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Container>
            <Box>
              <About />
            </Box>
            <Box>
              <ToolStacks />
            </Box>
            <Box sx={{ paddingTop: "100px" }}>
              <Websites />
            </Box>
            <Box
              sx={{
                paddingTop: "100px",
                paddingBottom: "10%",
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Contact />
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Homepage;
