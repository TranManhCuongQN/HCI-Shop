import * as React from "react";
import type { Metadata } from "next";

export interface IPasswordLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Change Password | Hci Shop - Leading Laptop Store",
  description:
    "Change Password to Hci Shop - the leading laptop store. Explore high-quality products at competitive prices",
};

export default function PasswordLayout(props: IPasswordLayoutProps) {
  return <main>{props.children}</main>;
}
