import React from "react";
import { Typography, Box, Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Websites from "../components/Websites/Websites";
import ToolStacks from "../components/Stacks/ToolStack";
import VideoBackground from "../components/VideoBackground";

const Homepage = () => {
  const defaultTheme = createTheme();

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

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
              fontSize: "160px",
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
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    paddingTop: "80px",
                    paddingBottom: "30px",
                    fontSize: "50px",
                    fontFamily: "Helvetica",
                  }}
                >
                  A B O U T M E
                </Typography>
                <Typography
                  sx={{
                    fontSize: "86px",
                    fontFamily: "Helvetica",
                    fontWeight: "bold",
                    color: "white",
                    alignContent: "center",
                    justifyContent: "center",
                    display: "flex",
                    paddingBottom: "30px",
                  }}
                >
                  I have always had a natural curiosity of learning. In 2021, I
                  left the marketng career I had started to pivot into tech. I
                  had watched a few coding tutorials, asked a friend how to get
                  started, and one day took the plunge.
                </Typography>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
              >
                {/* <Typography
                  sx={{
                    fontSize: "32px",
                    fontFamily: "helvetica",
                    fontWeight: "bold",
                    color: "white",
                    alignContent: "end",
                    justifyContent: "end",
                    display: "flex",
                    paddingBottom: "30px",
                  }}
                >
                  Having a graphic design background gives me an advantage as a
                  software engineer as it helps me understand frontend web
                  development from an entirely different approach.
                </Typography> */}
              </motion.div>
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
