"use client";
import React from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Iconify from "@/components/iconify/Iconify";
import NavSection from "@/components/nav-section/NavSection";

const getIcon = (name: string) => (
  <Iconify icon={name} width={22} height={22} />
);

const navConfig = [
  {
    title: "profile",
    path: "/settings/profile",
    icon: getIcon("eva:person-outline"),
  },
  {
    title: "password",
    path: "/settings/password",
    icon: getIcon("mdi:password"),
  },
  {
    title: "account",
    path: "/settings/admin",
    icon: getIcon("ep:setting"),
  },
];

export const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const user = {
  avatar:
    "https://i.pinimg.com/736x/28/41/71/2841716e64ff836211f9a433bca44147.jpg",
  firstName: "Pam",
  lastName: "Pam",
  email: "PamYeuOi@gmail.com",
};

const Nav = () => {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: "100%",
      }}
    >
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={user?.avatar} />

            <Box sx={{ ml: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.primary", mb: -0.5 }}
              >
                {`${user?.firstName} ${user?.lastName}`}
              </Typography>

              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {user?.email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} miniDrawer={false} />
    </Box>
  );
};

export default Nav;
