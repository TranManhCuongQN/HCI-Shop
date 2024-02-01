import { Box } from "@mui/material";
import * as React from "react";

export interface IDashDividerProps {}

export default function DashDivider(props: IDashDividerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: 1,
        borderColor: (theme) => theme.palette.divider,
        borderBottomStyle: "dashed",
        my: 3,
      }}
    />
  );
}
