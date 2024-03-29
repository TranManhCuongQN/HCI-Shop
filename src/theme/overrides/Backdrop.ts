import { alpha } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";

// ----------------------------------------------------------------------

export default function Backdrop(theme: ThemeOptions) {
  const varLow = alpha(theme.palette?.grey?.[900] as string, 0.48);
  const varHigh = alpha(theme.palette?.grey?.[900] as string, 1);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            `rgb(22,28,36)`,
            `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent",
          },
        },
      },
    },
  };
}
