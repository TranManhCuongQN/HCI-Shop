import React from "react";
import Image from "next/image";

const SecondaryBanner = ({ image }: { image: string }) => {
  return (
    <>
      <Image
        src={image}
        alt="image"
        width={350}
        height={120}
        style={{
          borderRadius: 5,
          objectFit: "cover",
        }}
      />
    </>
  );
};

export default SecondaryBanner;
