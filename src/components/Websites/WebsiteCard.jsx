import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const WebsiteCard = ({ image, title }) => {
  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 500,
        backgroundColor: "#1A1A1A",
        color: "#FFFFFF",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component=""
        height=""
        image={image}
        alt={title}
        sx={{ borderRadius: "16px 16px 0 0" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            marginTop: "300px",
            marginLeft: "100px",
          }}
        >
          View Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default WebsiteCard;
