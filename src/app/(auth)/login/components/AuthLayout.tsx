"use client";
import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
export interface IAuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const hciLogo = "/icons/logos/new_hci_logo.svg";

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
          width="40px"
          height="40px"
          position="relative"
        >
          <Image src={hciLogo} alt="logo" fill />
        </MuiLink>
      </Box>
      <Typography variant="h3" component="h1" align="center">
        {props.title} to HCI
      </Typography>
      {props.children}
    </Container>
  );
}
