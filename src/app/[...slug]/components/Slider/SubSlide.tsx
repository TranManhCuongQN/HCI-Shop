import { Box } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export interface ISubSlideProps {
  image: string;
}

export default function SubSlide(props: ISubSlideProps) {
  const { image } = props;
  return (
    <Box
      sx={{
        px: 1,
        display: "block",
      }}
    >
      <Box
        component="span"
        sx={{
          lineHeight: 1,
          display: "block",
          overflow: "hidden",
          position: "relative",
          width: 84,
          height: 84,
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        <Box
          component="span"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Image
            src={image}
            alt="thumbnail"
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
