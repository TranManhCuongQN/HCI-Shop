"use client";
import { Grid } from "@mui/material";
import Nav from "./components/Navbar";

const SettingsPage = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4} lg={3}>
          <Nav />
        </Grid>
        <Grid item xs={12} md={8} lg={8}></Grid>
      </Grid>
    </>
  );
};

export default SettingsPage;
