import React from "react";
import { Box, Button, Link as MuiLink, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import Link from "next/link";
import Iconify from "@/components/iconify/Iconify";
import { fToNow } from "@/utils/format-time";

const ProductFavorite = ({
  favorite,
}: {
  favorite: {
    productName: string;
    image: string;
    totalHeart: number;
    createdAt: string;
    id: string;
    productId: string;
  };
}) => {
  const { productName, image, totalHeart, createdAt, id, productId } = favorite;
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack spacing={1} direction="row">
        <Box
          component="img"
          src={image}
          alt={productName}
          sx={{
            width: 56,
            height: 56,
            objectFit: "cover",
            borderRadius: 1,
          }}
        />
        <Stack spacing={0.5}>
          <MuiLink
            component={Link}
            href={`/products/${productId}`}
            underline="none"
            color="inherit"
          >
            <Typography variant="subtitle1">{productName}</Typography>
          </MuiLink>
          <Stack spacing={3} direction="row">
            <Stack spacing={1} direction="row">
              <Iconify
                icon="mdi:cards-heart"
                width={20}
                height={20}
                sx={{ color: "text.secondary" }}
              />
              <Typography variant="body2" color="text.secondary">
                {totalHeart}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {fToNow(createdAt)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Button variant="outlined" color="inherit" size="small">
        <Iconify
          icon="mdi:cards-heart"
          width={20}
          height={20}
          sx={{
            color: "#ff4842",
          }}
        />
        &nbsp; &nbsp;
        <Typography variant="button">Favorited</Typography>
      </Button>
    </Box>
  );
};

export default ProductFavorite;
