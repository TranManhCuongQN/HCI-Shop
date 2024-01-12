import ThemeRegistry from "../theme/theme-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ContainerPage } from "./components/ContainerPage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <div
              style={{
                minHeight: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Header />
              {/* <Container maxWidth="lg" sx={{ mt: 8, mb: 20 }}> */}
              <ContainerPage> {children}</ContainerPage>

              {/* </Container> */}
              <Footer />
            </div>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
