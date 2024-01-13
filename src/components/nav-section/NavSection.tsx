"use client";
import React, { useEffect } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import { Box, List, ListItemText } from "@mui/material";

import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { useParams, usePathname } from "next/navigation";

const NavItem = ({ item }: { item: any }) => {
  const { path, title, icon, info, children } = item;
  const theme = useTheme();
  const pathName = usePathname();
  const [active, setActive] = React.useState<string>(pathName.split("/")[2]);

  useEffect(() => {
    setActive(pathName.split("/")[2]);
  }, [pathName]);

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
      active={active}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      <ListItemText primary={title} />
    </StyledNavItem>
  );
};

const NavSection = ({
  data = [],
  ...other
}: {
  data: {
    title: string;
    path: string;
    icon: any;
  }[];
}) => {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default NavSection;
