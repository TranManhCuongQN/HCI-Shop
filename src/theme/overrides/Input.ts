import { ThemeOptions } from "@mui/material/styles/createTheme";

export default function Input(theme: ThemeOptions) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette?.text?.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette?.text?.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: theme.palette?.customGrey?.[50056],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette?.customGrey?.[50012],
          "&:hover": {
            backgroundColor: theme.palette?.customGrey?.[50016],
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette?.action?.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette?.action?.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: theme.palette?.customGrey?.[50056],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette?.customGrey?.[50032],
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette?.action?.disabledBackground,
            },
          },
        },
      },
    },
  };
}
