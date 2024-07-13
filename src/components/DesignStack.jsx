import React from "react";
import { Grid, Box, Typography, ImageList, ImageListItem } from "@mui/material";

export default function DesignStack() {
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
          Design Stack
        </Typography>
        <ImageList
          sx={{
            width: 300,
            height: 300,
            marginBottom: "20px",
            marginLeft: "230px",
          }}
          cols={3}
          gap={20}
        >
          {designItemData.map((item) => (
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
      </Box>
    </Grid>
  );
}

const designItemData = [
  {
    img: "/assets/adobe-xd.svg",
    title: "html5",
  },
  {
    img: "/assets/adobe-photoshop.svg",
    title: "photoshop",
  },
  {
    img: "/assets/adobe-illustrator.svg",
    title: "Illustrator",
  },
  {
    img: "/assets/figma.svg",
    title: "css",
  },
  {
    img: "/assets/midjourney.svg",
    title: "midjourney",
  },
];
