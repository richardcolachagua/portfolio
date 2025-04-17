import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import WebsiteCard from "./WebsiteCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const websites = [
  {
    image: "",
    title: "Dream Closet",
    description: "Full Stack Application",
    paragraph:
      "A website where you can create a profile, search for clothes on our search engine, & save your clothes & searches for later.",
  },
  {
    image: "",
    title: "Ironman vs Batman",
    description: "Frontend UI Project",
    paragraph:
      "The debate is always who is the better of the two between these two billionaires, Ironman vs Batman",
  },
  {
    image: "",
    title: "Career Website",
    description: "Frontend UI Project",
    paragraph:
      "A website where you can view tips on resume revamping, linkedIn optimimzation, and interview preperation.",
  },
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
    <Box sx={{ backgroundColor: "", padding: "40px 20px" }}>
      <Typography
        variant="h1"
        component="h2"
        align="center"
        sx={{
          color: "white",
          marginBottom: "40px",
          fontFamily: "helvetica",
          fontWeight: "bold",
        }}
      >
        Projects
      </Typography>
      <Slider {...settings}>
        {websites.map((site, index) => (
          <Box key={index} sx={{ padding: "0 10px" }}>
            <WebsiteCard
              image={site.image}
              title={site.title}
              description={site.description}
              paragraph={site.paragraph}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Websites;
