import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shop HCI",
    short_name: "Shop HCI - High-Quality Laptops Suitable for All Needs",
    description:
      "Welcome to HCI Shop - specializing in providing high-quality laptops. Let us help you find the most suitable laptop for your work and entertainment needs from our diverse collection of laptop",
    icons: [
      {
        src: "https://raw.githubusercontent.com/TranManhCuongQN/next-app/master/src/assets/icons/logos/HCI_logo.svg?token=GHSAT0AAAAAACMHA3O6IG7TOUS2G6IY4AAIZNBBNLQ",
        sizes: "80x80",
        type: "image/png",
      },
    ],
    theme_color: "#161C24",
    background_color: "#161C24",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
  };
}
