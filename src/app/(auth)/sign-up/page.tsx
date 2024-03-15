import * as React from "react";
import AuthLayout from "../login/components/AuthLayout";
import SignUpPage from "./components/SignUpForm";
import type { Metadata } from "next";

export interface ISignUpProps {}

export const metadata: Metadata = {
  title: "Sign up | Hci Shop - Leading Laptop Store",
  description:
    "Sign up to Hci Shop - the leading laptop store. Explore high-quality products at competitive prices",
};

export default function SignUp(props: ISignUpProps) {
  return (
    <main>
      <AuthLayout title="Sign up">
        <SignUpPage />
      </AuthLayout>
    </main>
  );
}
