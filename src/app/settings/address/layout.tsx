import * as React from "react";
import type { Metadata } from "next";

export interface IAddressLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Manage Address | Hci Shop - Leading Laptop and Phone Store",
  description:
    "Manage Address to Hci Shop - the leading laptop and phone store. Explore high-quality products at competitive prices",
};

export default function AddressLayout(props: IAddressLayoutProps) {
  return <main>{props.children}</main>;
}
