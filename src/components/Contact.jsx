import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

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
        backgroundColor: "rgba(242, 242, 242, .5)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "black",
          marginBottom: "10px",
        }}
      >
        Contact
      </Typography>
      <Box>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link>
            <EmailIcon sx={{ fontSize: "60px" }} />
          </Link>
          <Link>
            <img src="/assets/linkedin-icon.svg" alt="LinkedIn" width="50px" />
          </Link>
          <Link>
            <img src="/assets/github.svg" alt="Github" width="90px" />
          </Link>
          <Link>
            <img src="/assets/resume.png" alt="Resume" width="70px" />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Contact;
