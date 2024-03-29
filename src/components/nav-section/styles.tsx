"use client";
import { styled } from "@mui/material/styles";
import { ListItemIcon, ListItemButton } from "@mui/material";
import Link from "next/link";

export const StyledNavItem = styled(
  (props: { children?: React.ReactNode; path?: string; active?: string }) => (
    <ListItemButton
      disableGutters
      {...props}
      LinkComponent={Link}
      selected={props.active === props.path?.split("/")[2]}
      href={props.path as string}
    >
      {props.children}
    </ListItemButton>
  )
)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
