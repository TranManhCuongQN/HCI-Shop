import React from "react";
import { Stack, Typography } from "@mui/material";
import Iconify from "@/components/iconify/Iconify";

const user = {
  phone: "012939218",
  dateOfBith: "01/04/2000",
  address: "1 Vo Van Ngan, Thu Duc, Ho Chi Minh, Vietnam",
};

const ProfileOverview = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={1} direction="row">
        <Iconify icon="material-symbols:phone-enabled" width={24} height={24} />
        <Typography variant="body1">{user?.phone}</Typography>
      </Stack>
      <Stack spacing={1} direction="row">
        <Iconify icon="ic:baseline-calendar-month" width={24} height={24} />
        <Typography variant="body1">{user?.dateOfBith}</Typography>
      </Stack>
      <Stack spacing={1} direction="row">
        <Iconify icon="material-symbols:location-on" width={24} height={24} />
        <Typography variant="body1">{user?.address}</Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileOverview;
