"use client";
import * as React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./emotion-cache";
import { PaletteOptions, Shadows, createTheme } from "@mui/material";
import { CUSTOM_GREY, lightPalette, darkPalette } from "./palette";
import typography from "./typography";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import shadows, { customShadows } from "./shadows";
import componentsOverrides from "./overrides";
import useThemeStore from "@/zustand/use-theme";

declare module "@mui/material/styles" {
  interface Palette {
    customGrey?: typeof CUSTOM_GREY;
  }
  interface PaletteOptions {
    customGrey?: typeof CUSTOM_GREY;
  }
  interface ThemeOptions {
    customShadows?: typeof customShadows;
  }
}

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeStore = useThemeStore((state) => state.mode);

  console.log("themeStore", themeStore);

  React.useEffect(() => {
    if (themeStore === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [themeStore]);

  const theme = React.useMemo(() => {
    if (themeStore === "dark") {
      return createTheme({
        palette: darkPalette as PaletteOptions,
        shape: { borderRadius: 8 },
        typography: typography as TypographyOptions,
        shadows: shadows(true) as Shadows,
        customShadows: customShadows,
      });
    } else if (themeStore === "light") {
      return createTheme({
        palette: lightPalette as PaletteOptions,
        shape: { borderRadius: 8 },
        typography: typography as TypographyOptions,
        shadows: shadows(false) as Shadows,
        customShadows: customShadows,
      });
    }

    return createTheme({
      palette: lightPalette as PaletteOptions,
      shape: { borderRadius: 8 },
      typography: typography as TypographyOptions,
      shadows: shadows(false) as Shadows,
      customShadows: customShadows,
    });
  }, []);

  theme.components = componentsOverrides(theme);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
