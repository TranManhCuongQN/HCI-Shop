import React, { useMemo } from "react";
import { Grid, Stack } from "@mui/material";
import { BANNER_POSITION } from "../../constants/banner";
import SecondaryBanner from "./SecondaryBanner";
import MainBannerSlider from "./MainBannerSlider";

const Banners = ({
  banners,
}: {
  banners: {
    field: string;
    id: string;
    image: string;
  }[];
}) => {
  const slideBanners = useMemo(() => {
    return banners?.filter((banner) => banner?.field === BANNER_POSITION.MAIN);
  }, [banners]);

  const secondaryBanners = useMemo(() => {
    return banners?.filter((banner) => banner?.field === BANNER_POSITION.SUB);
  }, [banners]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <MainBannerSlider banners={slideBanners} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Stack spacing={2.5}>
          {secondaryBanners?.map((banner) => (
            <SecondaryBanner key={banner?.id} image={banner?.image} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Banners;
