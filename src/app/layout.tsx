import ThemeRegistry from "../theme/theme-registry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ContainerPage } from "./components/ContainerPage";
import "@/styles/scroll.css";
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en">
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
