import * as React from "react";
import AuthLayout from "./components/AuthLayout";
import LoginForm from "./components/LoginForm";
import type { Metadata } from "next";

export interface ILoginPageProps {}

export const metadata: Metadata = {
  title: "Login | Hci Shop - Leading Laptop and Phone Store",
  description:
    "Log in to Hci Shop - the leading laptop and phone store. Explore high-quality products at competitive prices",
};

export default function LoginPage(props: ILoginPageProps) {
  return (
    <main
      style={{
        minHeight: "100%",
        overflow: "hidden",
      }}
    >
      <AuthLayout title="Log in">
        <LoginForm />
      </AuthLayout>
    </main>
  );
}
