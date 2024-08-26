import React from "react";
import { Typography, Box, Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import Websites from "../components/Websites/Websites";
import ToolStacks from "../components/Stacks/ToolStack";

const Homepage = () => {
  const defaultTheme = createTheme();

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <Box
      sx={{
        backgroundColor: "grey",
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
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "silver",
                  paddingRight: "120px",
                  paddingTop: "40px",
                }}
              >
                Hello. My name is Richard Colachagua. I am a New York City Based
                Software Engineer.
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  paddingTop: "20px",
                  paddingBottom: "30px",
                  fontSize: "40px",
                  fontFamily: "helvetica",
                }}
              >
                A B O U T M E
              </Typography>
              <Typography
                sx={{
                  fontSize: "26px",
                  fontFamily: "helvetica",
                  fontWeight: "bold",
                  color: "blue",
                  alignContent: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingBottom: "30px",
                }}
              >
                I have always had a natural curiosity of learning, and in 2021,
                I left the marketng career I had started to carve out for myself
                to venture into the tech industry. I had watched a tutorial here
                and there, asked a friend how to get started, and one day took
                the plunge. I've been studying and working small jobs since.
              </Typography>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontFamily: "helvetica",
                  fontWeight: "bold",
                  color: "peru",
                  alignContent: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingBottom: "30px",
                }}
              >
                Having a graphic design background gives me an advantage as a
                software engineer as it helps me understand frontend web
                development from an entirely different approach.
              </Typography>
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
  );
};

export default Homepage;
