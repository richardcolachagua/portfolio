import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Contact
      </Typography>
      <Stack direction="row">
        <EmailIcon />
      </Stack>
    </Box>
  );
};

export default Contact;
