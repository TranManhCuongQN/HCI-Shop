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
import useThemeStore from "@/zustand/use-trheme";

declare module "@mui/material/styles" {
  interface Palette {
    customGrey?: typeof CUSTOM_GREY;
    main?: string;
    customBackground?: {
      neutral: string;
    };
  }
  interface PaletteOptions {
    main?: string;
    customGrey?: typeof CUSTOM_GREY;
    customBackground?: {
      neutral: string;
    };
  }
  interface ThemeOptions {
    customShadows?: typeof customShadows;
  }
}

export default function ThemeRegistry({
  modeInitial,
  children,
}: {
  modeInitial: string;
  children: React.ReactNode;
}) {
  const setMode = useThemeStore((state) => state.setMode);
  const mode = useThemeStore((state) => state.mode);

  React.useEffect(() => {
    setMode(modeInitial as "light" | "dark");
  }, []);

  React.useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [mode]);

  const theme = React.useMemo(() => {
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        return createTheme({
          palette: darkPalette as PaletteOptions,
          shape: { borderRadius: 8 },
          typography: typography as TypographyOptions,
          shadows: shadows(true) as Shadows,
          customShadows: customShadows,
        });
      } else if (mode === "light") {
        return createTheme({
          palette: lightPalette as PaletteOptions,
          shape: { borderRadius: 8 },
          typography: typography as TypographyOptions,
          shadows: shadows(false) as Shadows,
          customShadows: customShadows,
        });
      }
    } else {
      if (modeInitial === "dark") {
        return createTheme({
          palette: darkPalette as PaletteOptions,
          shape: { borderRadius: 8 },
          typography: typography as TypographyOptions,
          shadows: shadows(true) as Shadows,
          customShadows: customShadows,
        });
      } else if (modeInitial === "light") {
        return createTheme({
          palette: lightPalette as PaletteOptions,
          shape: { borderRadius: 8 },
          typography: typography as TypographyOptions,
          shadows: shadows(false) as Shadows,
          customShadows: customShadows,
        });
      }
    }

    return createTheme({
      palette:
        mode === "dark"
          ? (darkPalette as PaletteOptions)
          : (lightPalette as PaletteOptions),
      shape: { borderRadius: 8 },
      typography: typography as TypographyOptions,
      shadows: shadows(false) as Shadows,
      customShadows: customShadows,
    });
  }, [mode]);

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
