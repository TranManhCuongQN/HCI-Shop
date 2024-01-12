"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Link as LinkMui,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import hciLogo from "../../assets/icons/logos/new_hci_logo.svg";
import vnpay from "../../assets/icons/payments/ic_vnpay.svg";
import mastercard from "../../assets/icons/payments/ic_mastercard.svg";
import visa from "../../assets/icons/payments/ic_visa.svg";
import Image from "next/image";
import Link from "next/link";

const StyledTextLogo = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(.25turn, #7F0E0E, #0F0D73)",
  WebkitBackgroundClip: "text",
  WebkitBackdropFilter: "transparent",
}));

const LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/" },
  { label: "Our Team", path: "/" },
];

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          width: "100%",
          minHeight: 120,
          backgroundColor: (theme) => theme.palette.background.default,
          position: "absolute",
          top: `calc(100% - 120px)`,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={8} direction="row">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component={Image}
                src={hciLogo}
                alt="logo"
                sx={{ mr: 0.5 }}
              />
              <Stack spacing={-1.5}>
                <StyledTextLogo variant="h6">HCI</StyledTextLogo>
                <Typography variant="h6" component="h1">
                  2023
                </Typography>
              </Stack>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Stack spacing={0.5}>
                  {LINKS.map((link) => (
                    <LinkMui
                      key={link.label}
                      underline="none"
                      component={Link}
                      href={link.path}
                    >
                      <Typography variant="subtitle2" color="text.secondary">
                        {link.label}
                      </Typography>
                    </LinkMui>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Support Payments
                  </Typography>
                  <Stack spacing={1} direction="row">
                    <Box
                      component={Image}
                      src={vnpay}
                      alt="vnpay"
                      sx={{
                        width: 32,
                        height: 32,
                      }}
                    />
                    <Box
                      component={Image}
                      src={mastercard}
                      alt="mastercard"
                      sx={{
                        width: 32,
                        height: 32,
                      }}
                    />
                    <Box
                      component={Image}
                      src={visa}
                      alt="visa"
                      sx={{
                        width: 32,
                        height: 32,
                      }}
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
