import React from "react";
import Image from "next/image";

const MainBannerSlide = ({ image }: { image: string }) => {
  return (
    <Image
      src={image}
      alt="Product Image"
      width={800}
      height={400}
      style={{
        objectPosition: "center",
        objectFit: "cover",
      }}
    />
  );
};

export default MainBannerSlide;
