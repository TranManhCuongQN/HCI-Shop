import * as React from "react";
import ThemeRegistry from "../theme/theme-registry";
import Footer from "@/components/footer/Footer";
import { Box, Container } from "@mui/material";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Next.js",
  description: "Tutorial Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Box
            sx={{
              minHeight: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Header />
            <Container maxWidth="lg" sx={{ mt: 8, mb: 20 }}>
              {children}
            </Container>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
