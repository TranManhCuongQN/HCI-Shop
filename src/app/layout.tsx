import * as React from "react";
import ThemeRegistry from "../theme/theme-registry";
import Footer from "@/components/footer/Footer";
import { Container, styled } from "@mui/material";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Next.js",
  description: "Tutorial Next.js",
};

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
  position: "relative",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <RootStyle>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 8, mb: 20 }}>
              {children}
            </Container>
            <Footer />
          </RootStyle>
        </ThemeRegistry>
      </body>
    </html>
  );
}
