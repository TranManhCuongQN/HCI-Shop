"use client";
import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import hciLogo from "@/assets/icons/logos/new_hci_logo.svg";
import Image from "next/image";
export interface IAuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function AuthLayout(props: IAuthLayoutProps) {
  return (
    <Container maxWidth="xs" sx={{ minHeight: "100%" }}>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <MuiLink
          component={Link}
          href="/"
          underline="none"
          color="text.primary"
        >
          <Box
            component={Image}
            src={hciLogo}
            alt="logo"
            sx={{
              width: 64,
              height: 64,
            }}
          />
        </MuiLink>
      </Box>
      <Typography variant="h3" component="h1" align="center">
        {props.title} to HCI
      </Typography>
      {props.children}
    </Container>
  );
}
