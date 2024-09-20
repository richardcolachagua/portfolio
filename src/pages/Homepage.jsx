import React, { useEffect, useRef } from "react";
import { Typography, Box, Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Lenis from "@studio-freight/lenis";
import Contact from "../components/Contact";
import Websites from "../components/Websites/Websites";
import ToolStacks from "../components/Stacks/ToolStack";
import VideoBackground from "../components/VideoBackground";
import About from "../components/About";
import Learning from "../components/Learning";

const Homepage = () => {
  const defaultTheme = createTheme();
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureOrientation: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

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
              paddingTop: "50px",
              fontSize: "100px",
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
            <Box>
              <Learning />
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
