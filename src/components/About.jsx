import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <Box>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            paddingTop: "60px",
            paddingBottom: "20px",
            fontSize: "30px",
            fontFamily: "Helvetica",
          }}
        >
          A B O U T M E
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            fontFamily: "Helvetica",
            fontWeight: "bold",
            color: "white",
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            paddingBottom: "30px",
          }}
        >
          I have always had a natural curiosity of learning. In 2021, I left the
          marketing career I had started to pivot into the software side of
          tech. I had watched a few coding tutorials, asked a friend how to get
          started, and took the plunge.
        </Typography>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
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
  );
};

export default About;
