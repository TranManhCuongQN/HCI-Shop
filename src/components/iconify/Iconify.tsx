import React from "react";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const Iconify = ({
  icon,
  sx,
  width,
  height,
}: {
  icon: string;
  sx?: SxProps<Theme>;
  width?: number;
  height?: number;
}) => {
  return (
    <Box
      component={Icon}
      icon={icon}
      sx={{ ...sx }}
      width={width}
      height={height}
    />
  );
};

export default Iconify;
