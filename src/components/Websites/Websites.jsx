import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import WebsiteCard from "./WebsiteCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const websites = [
  { image: "", title: "" },
  { image: "", title: "" },
  { image: "", title: "" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Websites = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", padding: "40px 20px" }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{ color: "#FFFFFF", marginBottom: "40px" }}
      >
        Websites
      </Typography>
      <Slider {...settings}>
        {websites.map((site, index) => (
          <Box key={index} sx={{ padding: "0 10px" }}>
            <WebsiteCard image={site.image} title={site.title} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Websites;
