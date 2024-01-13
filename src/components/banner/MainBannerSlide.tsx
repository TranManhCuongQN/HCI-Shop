import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const MainBannerSlide = ({ image }: { image: string }) => {
  return (
    <Box
      component="span"
      sx={{
        width: "100%",
        lineHeight: 1,
        display: "block",
        overflow: "hidden",
        borderRadius: 1,
        height: 400,
        position: "relative",
      }}
    >
      <Image
        src={image}
        alt="Main Banner Slide"
        sizes="100%"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute",
        }}
      />
    </Box>
  );
};

export default MainBannerSlide;
