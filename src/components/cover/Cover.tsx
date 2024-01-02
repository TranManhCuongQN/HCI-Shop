import React from "react";
import { Box, Skeleton } from "@mui/material";
import cx from "clsx";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import useImage from "@/hooks/use-image";

const Cover = ({
  src,
  alt,
  sx,
}: {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
}) => {
  const { loaded } = useImage({ src });

  if (!loaded) {
    return <Skeleton sx={{ ...sx }} variant="rounded" />;
  }

  return (
    <Box
      component="img"
      alt={alt}
      src={src}
      className={cx("smooth", { loaded })}
      sx={{ ...sx }}
    />
  );
};

export default Cover;
