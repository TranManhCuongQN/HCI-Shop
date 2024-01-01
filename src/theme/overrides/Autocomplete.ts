import { ThemeOptions } from "@mui/material/styles/createTheme";

export default function Autocomplete(theme: ThemeOptions) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme?.customShadows?.(false).z20,
        },
      },
    },
  };
}
