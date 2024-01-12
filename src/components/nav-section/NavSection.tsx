"use client";
import React, { useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import {
  Box,
  Collapse,
  Link as MuiLink,
  List,
  ListItemText,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";

import Iconify from "../iconify/Iconify";
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ item, miniDrawer }: { item: any; miniDrawer: any }) => {
  const { path, title, icon, info, children } = item;
  const theme = useTheme();
  const pathname = usePathname();

  return (
    <StyledNavItem
      path={path}
      sx={{
        "&.active": {
          color: theme.palette.primary.main,
          backgroundColor: `${alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          )}`,
          fontWeight: "fontWeightBold",
        },
      }}
    >
      {miniDrawer ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
          <Typography variant="subtitle2">{title}</Typography>
        </Box>
      ) : (
        <>
          <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
          <ListItemText primary={title} />
        </>
      )}
      {info && info}
    </StyledNavItem>
  );
};

const NavSection = ({
  data = [],
  miniDrawer = false,
  ...other
}: {
  data: {
    title: string;
    path: string;
    icon: any;
  }[];
  miniDrawer: boolean;
}) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} miniDrawer={miniDrawer} />
        ))}
      </List>
    </Box>
  );
};

export default NavSection;
