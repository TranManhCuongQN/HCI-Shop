import React, { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

import { StyledLabel } from "./styles";

const Label = forwardRef(
  (
    {
      children,
      color = "default",
      variant = "soft",
      startIcon,
      endIcon,
      sx,
    }: {
      children: React.ReactNode;
      color?: string;
      variant?: string;
      startIcon?: React.ReactNode;
      endIcon?: React.ReactNode;
      sx?: SxProps<Theme>;
    },
    ref
  ) => {
    const theme = useTheme();

    const iconStyle = {
      width: 16,
      height: 16,
      "& svg, img": { width: 1, height: 1, objectFit: "cover" },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={theme}
      >
        {startIcon && <Box sx={{ mr: 0.75, ...iconStyle }}>{startIcon}</Box>}
        {children}
        {endIcon && <Box sx={{ mr: 0.75, ...iconStyle }}>{endIcon}</Box>}
      </StyledLabel>
    );
  }
);

export default Label;
