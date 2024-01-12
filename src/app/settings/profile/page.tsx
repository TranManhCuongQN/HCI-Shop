"use client";
import React from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import FormProvider from "@/components/form/FormProvider";
import RHFTextField from "@/components/form/RHFTextField";
import RHFDateTextField from "@/components/form/RHFDataTextField";
import RHFRadioGroup from "@/components/form/RHFRadioGroup";
import AvatarUploader from "@/components/avatar-uploader/AvatarUploader";

const genders = ["Male", "Female"];

const user = {
  avatar:
    "https://i.pinimg.com/736x/28/41/71/2841716e64ff836211f9a433bca44147.jpg",
  firstName: "Pam",
  lastName: "Pam",
  email: "PamYeuOi@gmail.com",
};

const AccountSettings = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" component="h1">
        My Profile
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box>
        <FormProvider>
          <Grid
            container
            spacing={2}
            sx={{
              flexDirection: {
                xs: "column-reverse",
                md: "row",
              },
            }}
          >
            <Grid item xs={12} md={8}>
              <Stack spacing={2}>
                <RHFTextField name="firstName" />
                <RHFTextField name="lastName" label="Last Name" />
                <RHFTextField name="phone" label="Phone" />
                <RHFDateTextField name="birthDate" label="Date of birth" />
                <RHFRadioGroup
                  name="gender"
                  id="gender-radios"
                  label="Gender"
                  items={genders}
                  row
                />
                <RHFTextField
                  multiline
                  minRows={3}
                  name="address"
                  label="Address"
                />
              </Stack>
              <Box sx={{ mt: 2 }}>
                <LoadingButton
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Update Profile
                </LoadingButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2">Profile picture</Typography>
              <Box sx={{ marginBlock: 1 }}>
                <AvatarUploader avatarUrl={user?.avatar} name="avatar" />
              </Box>
            </Grid>
          </Grid>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default AccountSettings;
