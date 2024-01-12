import * as React from "react";
import AuthLayout from "../login/components/AuthLayout";
import type { Metadata } from "next";
import VerifyForm from "./components/VerifyForm";

export interface ISignUpProps {}

export const metadata: Metadata = {
  title: "Verify account | Hci Shop - Leading Laptop and Phone Store",
  description:
    "Verify account to Hci Shop - the leading laptop and phone store. Explore high-quality products at competitive prices",
};

export default function SignUp(props: ISignUpProps) {
  return (
    <main>
      <AuthLayout title="Verify account">
        <VerifyForm />
      </AuthLayout>
    </main>
  );
}
