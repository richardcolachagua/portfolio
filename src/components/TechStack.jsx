import React from "react";
import { Grid, Box, Typography, ImageList, ImageListItem } from "@mui/material";

export default function TechStack() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <Typography
          variant="h3"
          marginLeft={30}
          marginTop={30}
          sx={{ fontWeight: "bold" }}
        >
          Tech Stack
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginTop: "10px", marginLeft: "200px" }}
        >
          Frontend
        </Typography>
        <ImageList
          sx={{
            width: 300,
            height: 300,
            marginBottom: "20px",
            marginLeft: "200px",
          }}
          cols={3}
          gap={20}
        >
          {frontendItemData.map((item) => (
            <ImageListItem key={item.img} sx={{ overflow: "visible" }}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginTop: "10px", marginLeft: "200px" }}
        >
          Backend
        </Typography>
        <ImageList
          sx={{
            width: 300,
            height: 300,
            marginLeft: "200px",
          }}
          cols={3}
          gap={20}
        >
          {backendItemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{ overflow: "visible", marginBottom: "80px" }}
            >
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Grid>
  );
}

const frontendItemData = [
  {
    img: "/assets/html-5.svg",
    title: "html5",
  },
  {
    img: "/assets/css-3.svg",
    title: "css",
  },
  {
    img: "/assets/javascript.svg",
    title: "Javascript",
  },
  {
    img: "/assets/react.svg",
    title: "React",
  },
  {
    img: "/assets/material-ui.svg",
    title: "Material UI",
  },
  {
    img: "/assets/framer.svg",
    title: "Framer",
  },
];

const backendItemData = [
  {
    img: "/assets/axios.svg",
    title: "axios",
  },
  {
    img: "/assets/express.svg",
    title: "express",
  },
  {
    img: "/assets/mongodb.svg",
    title: "mongoDB",
  },
  {
    img: "/assets/nodejs.svg",
    title: "node.js",
  },
];
