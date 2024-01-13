"use client";
import React from "react";
import Slider from "react-slick";
import { Box, List } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slick-slide.css";

import MainBannerSlide from "./MainBannerSlide";

const MainBannerSlider = ({
  banners,
}: {
  banners: {
    field: string;
    id: string;
    image: string;
  }[];
}) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    lazyLoad: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dotsClass: "dots-none",
    appendDots: (dots: any) => (
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          padding: 1,
        }}
      >
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            "& .slick-active div": {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
            "& li": {},
          }}
        >
          {dots}
        </List>
      </Box>
    ),
    customPaging: (index: any) => (
      <Box
        sx={{
          width: 48,
          height: 5,
          backgroundColor: (theme) => theme.palette.divider,
          mx: 0.5,
        }}
      />
    ),
  };

  return (
    <Slider {...sliderSettings} lazyLoad="ondemand">
      {banners.map((banner) => (
        <MainBannerSlide image={banner?.image} key={banner?.id} />
      ))}
    </Slider>
  );
};

export default MainBannerSlider;
