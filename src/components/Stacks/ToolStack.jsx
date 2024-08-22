import React from "react";
import {
  Grid,
  Stack,
  Box,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

export default function ToolStacks() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Stack
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0 20px",
        }}
      >
        <Box sx={{ flex: "1 1 auto", maxWidth: "50%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "beige",
              textAlign: "center",
              marginTop: 3,
            }}
          >
            Tech Stack
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "wheat",
              textAlign: "center",
              marginTop: 2,
            }}
          >
            Frontend
          </Typography>
          <ImageList
            sx={{
              width: "100%",
              margin: "0 auto",
              paddingBottom: 2,
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
                  style={{ width: "70%", height: "70%", objectFit: "contain" }}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "wheat",
              textAlign: "center",
              marginTop: 2,
            }}
          >
            Backend
          </Typography>
          <ImageList
            sx={{
              width: "100%",
              margin: "0 auto",
              paddingBottom: 2,
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
      </Stack>
    </Grid>

    // </Box>
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
