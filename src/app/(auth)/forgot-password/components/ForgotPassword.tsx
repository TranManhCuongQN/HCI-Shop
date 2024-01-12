"use client";
import FormProvider from "@/components/form/FormProvider";
import RHFTextField from "@/components/form/RHFTextField";
import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";

export interface IForgotPasswordProps {}

export default function ForgotPassword(props: IForgotPasswordProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>(false);

  const ForgotPasswordSchema = Yup.object().shape({
    newPassword: Yup.string().required("New password is required"),
    confirmNewPassword: Yup.string()
      .required("Confirm new password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });

  const defaultValues = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const onSubmit = methods.handleSubmit((data) => console.log(data));
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" align="center" sx={{ my: 2 }}>
        Enter these fields to change your password.
      </Typography>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={2}>
          <RHFTextField
            name="newPassword"
            type={showPassword ? "text" : "password"}
            label="New password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <RHFTextField
            name="confirmNewPassword"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm new password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={
                        showConfirmPassword
                          ? "eva:eye-fill"
                          : "eva:eye-off-fill"
                      }
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Box sx={{ my: 3 }}>
          <LoadingButton type="submit" fullWidth variant="contained">
            Change password
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
