import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Box
      sx={{
        height: "250px",
        width: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        left: "50%",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginBottom: "10px",
        }}
      >
        Contact
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="mailto:richardcolachagua@gmail.com">
          <EmailIcon sx={{ fontSize: "60px", color: "white" }} />
        </Link>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin-icon.svg" alt="LinkedIn" width="50px" />
        </a>
        <a
          href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/github.svg" alt="Github" width="90px" />
        </a>
        <Link href="/assets/your_resume.pdf" download="Your_Resume.pdf">
          <img
            src="/assets/resume.png"
            alt="Resume"
            width="70px"
            style={{ color: "white" }}
          />
        </Link>
      </Stack>
    </Box>
  );
};

export default Contact;
