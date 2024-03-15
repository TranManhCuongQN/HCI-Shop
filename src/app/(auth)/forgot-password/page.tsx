import * as React from "react";
import AuthLayout from "../login/components/AuthLayout";
import ForgotPassword from "./components/ForgotPassword";
import type { Metadata } from "next";

export interface IForgetPasswordProps {}

export const metadata: Metadata = {
  title: "Forgot Password | Hci Shop - Leading Laptop Store",
  description:
    "Forgot Password to Hci Shop - the leading laptop store. Explore high-quality products at competitive prices",
};

export default function ForgetPassword(props: IForgetPasswordProps) {
  return (
    <main>
      <AuthLayout title="Forgot password">
        <ForgotPassword />
      </AuthLayout>
    </main>
  );
}
