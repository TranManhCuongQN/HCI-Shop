import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Avatar, Button, Typography } from "@mui/material";
import Iconify from "@/components/iconify/Iconify";
import Link from "next/link";

const user = {
  avatar:
    "https://i.pinimg.com/736x/28/41/71/2841716e64ff836211f9a433bca44147.jpg",
  firstName: "Pam",
  lastName: "Pam",
  email: "PamYeuOi@gmail.com",
  gender: "Male",
};

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: 96,
    height: 96,
  },
  [theme.breakpoints.up("md")]: {
    width: 180,
    height: 180,
  },
}));

const StyledBoxName = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("xs")]: {
    justifyContent: "flex-start",
    marginLeft: 16,
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    marginTop: 16,
  },
}));

const StyledBoxAvatar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const AccountCard = () => {
  return (
    <Box>
      <StyledBoxAvatar sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledAvatar src={user?.avatar} />
        </Box>
        <StyledBoxName>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ mr: 1 }}
            >{`${user?.firstName} ${user?.lastName}`}</Typography>
            {user?.gender === "Male" ? (
              <Iconify icon="mdi:gender-male" width={24} height={24} />
            ) : (
              <Iconify icon="mdi:gender-female" width={24} height={24} />
            )}
          </Box>
          <Typography variant="subtitle2" color="text.secondary">
            {user?.email}
          </Typography>
        </StyledBoxName>
      </StyledBoxAvatar>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        disableElevation
        LinkComponent={Link}
        href="/settings/profile"
        sx={{
          boxShadow: "none",
        }}
      >
        Edit Profile
      </Button>
    </Box>
  );
};

export default AccountCard;
