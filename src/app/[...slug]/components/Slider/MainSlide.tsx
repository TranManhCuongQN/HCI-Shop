import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export interface IMainSlideProps {
  image: string;
}

export default function MainSlide(props: IMainSlideProps) {
  const { image } = props;
  return (
    <Box>
      <Box
        component="span"
        sx={{
          width: "100%",
          lineHeight: 1,
          display: "block",
          overflow: "hidden",
          position: "relative",
          paddingTop: "100%",
          borderRadius: 1,
        }}
      >
        <Box
          component="span"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            display: "inline-block",
            color: "transparent",
          }}
        >
          <Image
            src={image}
            alt="Product Image"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
