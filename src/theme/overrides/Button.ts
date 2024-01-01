import { ThemeOptions } from "@mui/material/styles/createTheme";

export default function Button(theme: ThemeOptions) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLagre: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette?.grey?.[800],
          boxShadow: theme.customShadows?.(false)?.z8,
          "&:hover": {
            backgroundColor: theme.palette?.grey?.[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows?.(false)?.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows?.(false)?.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette?.customGrey?.[50032] as string}`,
          "&:hover": {
            backgroundColor: theme.palette?.action?.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette?.action?.hover,
          },
        },
      },
    },
  };
}
