import { ThemeOptions } from "@mui/material/styles/createTheme";
import Autocomplete from "./Autocomplete";
import Backdrop from "./Backdrop";
import Button from "./Button";
import Card from "./Card";
import CssBaseline from "./CssBaseline";
import Input from "./Input";
import Paper from "./Paper";
import Tooltip from "./Tooltip";
import Typography from "./Typography";
import { Theme } from "@mui/material";

export default function componentsOverrides(theme: ThemeOptions & Theme) {
  return Object.assign(
    Autocomplete(theme),
    Backdrop(theme),
    Button(theme),
    Card(theme),
    CssBaseline(theme),
    Input(theme),
    Paper(),
    Tooltip(theme),
    Typography(theme)
  );
}
