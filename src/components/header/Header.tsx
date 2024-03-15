"use client";
import React, { useEffect, useMemo } from "react";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link as LinkMui,
  useMediaQuery,
  Badge,
  Container,
} from "@mui/material";
import Iconify from "../iconify/Iconify";
import Link from "next/link";
// utils
// components

//
import Image from "next/image";
import AccountPopover from "./AccountPopover";
import useThemeStore from "@/zustand/use-trheme";
// ----------------------------------------------------------------------

const hciLogo = "/icons/logos/new_hci_logo.svg";
const HEADER_MOBILE = 64;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  width: `100%`,
  WebkitBackdropFilter: "blur(6px)",
  backdropFilter: "blur(6px)",
  backgroundColor: alpha(theme.palette.background.default, 0.5),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
}));

const StyledTextLogo = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(.25turn, #7F0E0E, #0F0D73)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

// ----------------------------------------------------------------------

const menuItems = [
  {
    name: "Products",
    path: "/products",
  },
];

const MENU_OPTIONS = [
  {
    label: "Profile",
    icon: "eva:person-fill",
    path: "/profile",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
    path: "/settings/profile",
  },
];

const USER = {
  avatar:
    "https://i.pinimg.com/736x/28/41/71/2841716e64ff836211f9a433bca44147.jpg",
  firstName: "Pam",
  lastName: "Pam",
  email: "PamYeuOi@gmail.com",
};

export default function Header() {
  const [lightIcon, setLightIcon] = React.useState("ic:twotone-light-mode");
  const mode = useThemeStore((state) => state.mode);
  const toogleMode = useThemeStore((state) => state.toggleMode);

  useEffect(() => {
    if (mode === "light") setLightIcon("ic:twotone-dark-mode");
    else setLightIcon("ic:twotone-light-mode");
  }, [mode]);

  const toggleTheme = () => {
    toogleMode();
  };

  return (
    <header>
      <StyledRoot>
        <Container maxWidth="lg">
          <StyledToolbar>
            <IconButton
              sx={{
                mr: 1,
                color: "text.primary",
                display: { lg: "none" },
              }}
            >
              <Iconify icon="eva:menu-2-fill" />
            </IconButton>

            <StyledBox sx={{ mr: 2 }}>
              <LinkMui
                component={Link}
                href="/"
                underline="none"
                sx={{ display: "inline-flex", alginItems: "center" }}
              >
                <Box position="relative" width="40px" height="40px">
                  <Image src={hciLogo} alt="Logo" fill />
                </Box>
                <StyledTextLogo variant="h3" ml={1.5}>
                  HCI
                </StyledTextLogo>
              </LinkMui>
            </StyledBox>

            {/* <AlgoliaSearch /> */}

            <Stack direction="row" spacing={2} sx={{ ml: 2, display: "none" }}>
              {menuItems.map((item) => (
                <LinkMui
                  key={item.name}
                  component={Link}
                  underline="none"
                  href={item.path}
                  color="text.primary"
                >
                  <Button>{item.name}</Button>
                </LinkMui>
              ))}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Stack
              direction="row"
              alignItems="center"
              spacing={{
                xs: 0.5,
                sm: 1,
              }}
            >
              <IconButton onClick={toggleTheme}>
                <Iconify icon={lightIcon} width={24} height={24} />
              </IconButton>

              <LinkMui component={Link} href="/checkout" underline="none">
                <IconButton size="medium" color="default">
                  <Badge badgeContent={10} color="error">
                    <Iconify
                      icon="ic:outline-shopping-cart"
                      width={28}
                      height={28}
                    />
                  </Badge>
                </IconButton>
              </LinkMui>

              {USER ? (
                <AccountPopover user={USER} menuOptions={MENU_OPTIONS} />
              ) : (
                <Button
                  component={Link}
                  href="/login"
                  variant="text"
                  color="primary"
                  sx={{
                    borderRadius: 2,
                  }}
                >
                  <Iconify
                    icon="material-symbols:account-circle"
                    width={24}
                    height={24}
                  />
                  &nbsp; Login
                </Button>
              )}
            </Stack>
          </StyledToolbar>
        </Container>
      </StyledRoot>
    </header>
  );
}
