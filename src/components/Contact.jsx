import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box
      sx={{
        border: "3px solid #ccc",
        borderRadius: "15px",
        height: "250px",
        width: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "silver",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginBottom: "30px",
        }}
      >
        Contact
      </Typography>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EmailIcon sx={{ width: "30px" }} />
          <img src="/assets/linkedin-icon.svg" alt="LinkedIn" width="50px" />
          <img src="/assets/github.svg" alt="Github" width="90px" />
          <img src="/assets/resume.png" alt="Resume" width="70px" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
