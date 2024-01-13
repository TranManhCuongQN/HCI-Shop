import * as React from "react";
import type { Metadata } from "next";

export interface IProfileLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Profile | Hci Shop - Leading Laptop and Phone Store",
  description:
    "Profile to Hci Shop - the leading laptop and phone store. Explore high-quality products at competitive prices",
};

export default function ProfileLayout(props: IProfileLayoutProps) {
  return <main>{props.children}</main>;
}
