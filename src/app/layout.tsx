import ThemeRegistry from "../theme/theme-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ContainerPage } from "./components/ContainerPage";
import "@/styles/scroll.css";

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
              <ContainerPage>{children}</ContainerPage>
              <Footer />
            </div>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
