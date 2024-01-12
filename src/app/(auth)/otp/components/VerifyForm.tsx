"use client";
import RHFTextField from "@/components/form/RHFTextField";
import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "@/components/form/FormProvider";

export interface IVerifyFormProps {}

export default function VerifyForm(props: IVerifyFormProps) {
  const VerifySchema = Yup.object().shape({
    otp: Yup.string().required("Code is required"),
  });

  const defaultValues = {
    otp: "",
  };

  const methods = useForm({
    resolver: yupResolver(VerifySchema),
    defaultValues,
  });

  const onSubmit = methods.handleSubmit((data) => console.log(data));
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" align="center" sx={{ my: 2 }}>
        Enter the code sent to your email address.
      </Typography>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={2}>
          <RHFTextField name="otp" label="Code" />
        </Stack>
        <Box sx={{ my: 3 }}>
          <LoadingButton type="submit" fullWidth variant="contained">
            Confirm
          </LoadingButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alginItems: "center",
          }}
        >
          <Typography
            variant="body2"
            component="span"
            sx={{
              py: "2px",
            }}
          >
            Don't have an account yet?
          </Typography>
          &nbsp;
          <MuiLink component={Link} href="/sign-up" color="text.primary">
            <Typography variant="body1" component="span">
              Sign up
            </Typography>
          </MuiLink>
        </Box>
      </FormProvider>
    </Box>
  );
}
