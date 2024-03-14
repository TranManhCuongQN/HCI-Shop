import ThemeRegistry from "../theme/theme-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ContainerPage } from "./components/ContainerPage";
import "@/styles/scroll.css";
import { cookies } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop HCI - High-Quality Phones and Laptops Suitable for All Needs",
  description:
    "Welcome to HCI Shop - specializing in providing high-quality phones and laptops. Let us help you find the most suitable laptop and phone for your work and entertainment needs from our diverse collection of laptop",
  openGraph: {
    title: "HCI Shop",
    description:
      "Welcome to HCI Shop - specializing in providing high-quality phones and laptops. Let us help you find the most suitable laptop and phone for your work and entertainment needs from our diverse collection of laptop",
    type: "website",
    url: "https://hci-shop.vercel.app/",
    images: [
      "https://i.pinimg.com/564x/d7/47/d1/d747d1ca901acf7ed3561ffcd79a0720.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="fFtbMIgnPWJqb16Lu3O8cikrx6-Okm1cJDETfZ_vdeM"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry modeInitial={(theme?.value as string) || "dark"}>
            <div
              style={{
                minHeight: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Header />
              <ContainerPage>{children}</ContainerPage>
              <Footer />
            </div>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
