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
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "red",
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
          sx={{
            marginTop: "100px",
            marginRight: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EmailIcon />
          <img src="/assets/linkedin-icon.svg" alt="" width="30px" />
          <img src="/assets/github.svg" alt="" width="30px" />
          <img src="/assets/resume.png" alt="" width="30px" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
