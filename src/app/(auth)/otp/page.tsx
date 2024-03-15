import * as React from "react";
import AuthLayout from "../login/components/AuthLayout";
import type { Metadata } from "next";
import VerifyForm from "./components/VerifyForm";

export interface ISignUpProps {}

export const metadata: Metadata = {
  title: "Verify account | Hci Shop - Leading Laptop Store",
  description:
    "Verify account to Hci Shop - the leading laptop store. Explore high-quality products at competitive prices",
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
