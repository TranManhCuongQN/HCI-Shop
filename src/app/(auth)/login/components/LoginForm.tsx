"use client";
import FormProvider from "@/components/form/FormProvider";
import RHFTextField from "@/components/form/RHFTextField";
import Iconify from "@/components/iconify/Iconify";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const onSubmit = methods.handleSubmit((data) => console.log(data));
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1" align="center" sx={{ my: 2 }}>
        Enter your email address and password.
      </Typography>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack spacing={2}>
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
            Log in
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
