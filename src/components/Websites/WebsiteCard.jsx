import React from "react";
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
            fontSize: "30px",
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
          variant="h6"
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
            marginTop: "200px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          View Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default WebsiteCard;
