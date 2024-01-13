import { Grid } from "@mui/material";
import * as React from "react";
import Nav from "./components/Navbar";

export interface ISettingLayoutProps {
  children: React.ReactNode;
}

export default function SettingLayout(props: ISettingLayoutProps) {
  return (
    <main>
      <Grid container spacing={1} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4} lg={3}>
          <Nav />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          {props.children}
        </Grid>
      </Grid>
    </main>
  );
}
