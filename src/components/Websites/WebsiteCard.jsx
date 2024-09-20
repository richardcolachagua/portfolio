import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const WebsiteCard = ({ image, title, description, paragraph }) => {
  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 500,
        backgroundColor: "yellow",
        color: "black",
        borderRadius: "16px",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component=""
        height=""
        image={image}
        alt={title}
        description={description}
        sx={{ borderRadius: "16px 16px 0 0" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            fontSize: "27px",
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", justifyContent: "left" }}
        >
          {description}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", justifyContent: "left" }}
        >
          {paragraph}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "black",
            borderRadius: "30px",
            marginTop: "100px",
            transition: "background-color 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          View Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default WebsiteCard;
