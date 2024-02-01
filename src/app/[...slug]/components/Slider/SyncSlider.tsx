import Iconify from "@/components/iconify/Iconify";
import { Box, IconButton, Stack, Typography, alpha } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import SubSlide from "./SubSlide";
import MainSlide from "./MainSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface ISyncSliderProps {
  images: string[];
}

export default function SyncSlider(props: ISyncSliderProps) {
  const { images } = props;

  const [mainNav, setMainNav] = React.useState<Slider | null>(null);
  const [subNav, setSubNav] = React.useState<Slider | null>(null);
  const mainSliderRef = React.useRef<Slider | null>(null);
  const subSliderRef = React.useRef<Slider | null>(null);
  const [currentSlideNumber, setCurrentSlideNumber] = React.useState(1);

  React.useEffect(() => {
    if (mainSliderRef.current) {
      setMainNav(mainSliderRef.current);
    }
  }, [mainSliderRef]);

  React.useEffect(() => {
    if (subSliderRef.current) {
      setSubNav(subSliderRef.current);
    }
  }, [subSliderRef]);

  const handleClickNext = () => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickNext();
    }

    if (currentSlideNumber === images.length) {
      setCurrentSlideNumber(1);
    } else {
      setCurrentSlideNumber((prev) => prev + 1);
    }
  };

  const handleClickBack = () => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickPrev();
    }

    if (currentSlideNumber === 0) {
      setCurrentSlideNumber(images.length);
    } else {
      setCurrentSlideNumber((prev) => prev - 1);
    }
  };

  const mainNavSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: subNav,
    arrows: false,
  };

  const subNavSettings = {
    dots: false,
    infinite: true,
    slidesToShow: images.length > 5 ? 5 : images.length,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: mainNav,
    arrows: false,
  };
  return (
    <div>
      <Box
        sx={{
          borderRadius: 2,
          position: "relative",
          mb: 3,
        }}
      >
        <Slider {...mainNavSettings} ref={mainSliderRef} asNavFor={undefined}>
          {images &&
            images.map((image) => <MainSlide key={image} image={image} />)}
        </Slider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            top: "90%",
            right: 16,
            borderRadius: 1,
            px: 1,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            backgroundColor: (theme) => alpha(theme.palette.grey[900], 0.32),
          }}
        >
          <Stack spacing={0.25} direction="row">
            <IconButton color="inherit" onClick={handleClickBack}>
              <Iconify
                icon="material-symbols:arrow-back-ios-rounded"
                width={20}
                height={20}
                sx={{ color: "white" }}
              />
            </IconButton>
            <Box
              sx={{
                minWidth: 24,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography color="white" variant="subtitle1">
                {currentSlideNumber} / {images.length}
              </Typography>
            </Box>
            <IconButton color="inherit" onClick={handleClickNext}>
              <Iconify
                icon="material-symbols:arrow-forward-ios-rounded"
                width={20}
                height={20}
                sx={{ color: "white" }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      {images.length > 5 && (
        <Box
          sx={{
            margin: "0 auto",
            "& .slick-slide": {
              opacity: 0.48,
            },
            "& .slick-current": {
              opacity: 1,
            },
          }}
        >
          <Slider {...subNavSettings} ref={subSliderRef} asNavFor={undefined}>
            {images &&
              images.map((image, index) => (
                <SubSlide key={image} image={image} />
              ))}
          </Slider>
        </Box>
      )}
    </div>
  );
}
