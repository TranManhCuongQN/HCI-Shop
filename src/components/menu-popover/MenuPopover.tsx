import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { Popover } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const ArrowStyle = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: "absolute",
    borderRadius: "0 0 4px 0",
    transform: "rotate(-135deg)",
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

const MenuPopover = ({
  open,
  children,
  sx,
}: {
  open: boolean;
  children: React.ReactNode;
  sx: SxProps<Theme>;
}) => {
  return (
    <Popover
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          p: 1,
          width: 200,
          overflow: "inherit",
          ...sx,
        },
      }}
    >
      <ArrowStyle />
      {children}
    </Popover>
  );
};

export default MenuPopover;
