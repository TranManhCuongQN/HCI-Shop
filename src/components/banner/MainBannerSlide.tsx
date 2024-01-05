import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const MainBannerSlide = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="Product Image"
      width={680}
      height={400}
      style={{
        objectFit: "cover",
      }}
    />
  );
};

export default MainBannerSlide;
