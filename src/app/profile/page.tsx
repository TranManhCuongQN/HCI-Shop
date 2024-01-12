"use client";
import React, { useEffect, useState } from "react";
import { Grid, Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useRouter, useSearchParams } from "next/navigation";
import ProfileOverview from "./components/profile-overview/ProfileOverview";
import AccountCard from "./components/account-card/AccountCard";
import { PROFILE_TABS } from "@/constants/profile-tab";
import ProfileOrders from "./components/profile-order/ProfileOrder";
import ProfileFavorites from "./components/profile-favorite/ProfileFavorite";

const TABS = [
  { value: PROFILE_TABS.OVERVIEW, label: "Overview" },
  { value: PROFILE_TABS.ORDERS, label: "Orders" },
  { value: PROFILE_TABS.FAVORITES, label: "Favorites" },
];

const ProfilePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab");
  const [tab, setTab] = useState(
    currentTab ? currentTab : PROFILE_TABS.OVERVIEW
  );

  useEffect(() => {
    if (currentTab) {
      setTab(currentTab);
    } else {
      setTab(PROFILE_TABS.OVERVIEW);
    }
  }, [currentTab]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);

    if (newValue === PROFILE_TABS.OVERVIEW) {
      router.push("/profile");
    } else {
      router.push("/profile?tab=" + newValue);
    }
  };

  return (
    <Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AccountCard />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <TabContext value={tab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleTabChange} aria-label="profile tabs">
              {TABS.map((tab) => (
                <Tab label={tab.label} key={tab.value} value={tab.value} />
              ))}
            </TabList>
          </Box>
          <TabPanel sx={{ px: 0 }} value={PROFILE_TABS.OVERVIEW}>
            <ProfileOverview />
          </TabPanel>
          <TabPanel sx={{ px: 0 }} value={PROFILE_TABS.ORDERS}>
            <ProfileOrders />
          </TabPanel>
          <TabPanel sx={{ px: 0 }} value={PROFILE_TABS.FAVORITES}>
            <ProfileFavorites />
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
