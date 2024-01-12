"use client";
import * as React from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import FormProvider from "@/components/form/FormProvider";
import RHFTextField from "@/components/form/RHFTextField";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Iconify from "@/components/iconify/Iconify";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";

export interface ISignUpPageProps {}

export default function SignUpPage(props: ISignUpPageProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>(false);

  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const defaultValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(SignUpSchema),
    defaultValues,
  });

  const onSubmit = methods.handleSubmit((data) => console.log(data));

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" align="center" sx={{ my: 2 }}>
        Enter these information to create an account
      </Typography>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <RHFTextField name="firstName" label="First Name" />
            <RHFTextField name="lastName" label="Last Name" />
          </Stack>
          <RHFTextField name="email" label="Email" />
          <RHFTextField
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
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
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
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
        <Box sx={{ mt: 1 }}>
          <MuiLink
            component={Link}
            href="/forgot-password"
            color="text.primary"
            sx={{ textAlign: "center" }}
          >
            <Typography variant="body2">Forgot your password?</Typography>
          </MuiLink>
        </Box>
        <Box sx={{ my: 3 }}>
          <LoadingButton type="submit" fullWidth variant="contained">
            Sign up
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
            Already have an account?
          </Typography>
          &nbsp;
          <MuiLink component={Link} href="/login" color="text.primary">
            <Typography variant="body1" component="span">
              Log in
            </Typography>
          </MuiLink>
        </Box>
      </FormProvider>
    </Box>
  );
}
