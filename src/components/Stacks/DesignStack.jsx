import React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";

export default function DesignStack() {
  return (
    <Box>
      <Typography
        variant="h3"
        marginLeft={30}
        sx={{ fontWeight: "bold", color: "beige" }}
      >
        Design Stack
      </Typography>
      <Typography
        variant="h5"
        marginLeft={30}
        sx={{ fontWeight: "bold", color: "beige" }}
      >
        Creative Tools
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
