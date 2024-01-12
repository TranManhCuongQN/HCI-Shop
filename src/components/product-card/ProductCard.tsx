"use client";
import React, { useMemo } from "react";
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link as MuiLink,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import Link from "next/link";
import Image from "next/image";
import { fCurrency } from "@/utils/format-number";
import Iconify from "../iconify/Iconify";
import Label from "../label/Label";

const StyledDefaultIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.grey[900], 0.08),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[900], 0.32),
  },
}));

const StyledRedIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.error.main, 0.08),
  color: theme.palette.error.main,
  "&:hover": {
    backgroundColor: alpha(theme.palette.error.main, 0.32),
  },
}));

const ProductCard = ({ product }: { product: any }) => {
  const { id, name, media, price, discount, averageRating } = product;
  const isFavorited = false;
  const { enqueueSnackbar } = useSnackbar();

  const priceReal = useMemo(() => {
    if (discount > 0) {
      return price - price * (discount / 100);
    }

    return price;
  }, [price, discount]);

  const handleClickAddToCart = async () => {
    enqueueSnackbar("Added 1 item to your cart", { variant: "success" });
  };

  return (
    <Box
      sx={{
        borderRadius: 1,
        p: 0,
        position: "relative",
        "&:hover .card-action": {
          opacity: 1,
          visibility: "visible",
        },
        boxShadow: (theme) => theme.shadows[1],
        backgroundColor: (theme) => theme.palette.background.paper,
        "&:hover": {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        transition: "all 0.3s ease-in-out 0s",
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>
        {isFavorited ? (
          <StyledRedIconButton
            size="small"
            aria-label="favorite"
            sx={{
              zIndex: 9,
              top: 8,
              right: 8,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            <Iconify icon="mdi:cards-heart" width={24} height={24} />
          </StyledRedIconButton>
        ) : (
          <StyledDefaultIconButton
            size="small"
            aria-label="favorite"
            sx={{
              zIndex: 9,
              top: 8,
              right: 8,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            <Iconify icon="mdi:cards-heart" width={24} height={24} />
          </StyledDefaultIconButton>
        )}
        <MuiLink component={Link} href={`/products/${id}`}>
          <Image
            src={media[0]}
            alt={name}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </MuiLink>
      </Box>
      <Stack spacing={0.5} sx={{ px: 2, py: 2 }}>
        <MuiLink
          color="inherit"
          underline="hover"
          component={Link}
          href={`/products/${id}`}
        >
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </MuiLink>
        <Rating readOnly value={averageRating} size="small" precision={0.5} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" component="p" color="error">
              {fCurrency(priceReal)}
              &nbsp;
              {discount > 0 && (
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    color: "text.disabled",
                    textDecoration: "line-through",
                  }}
                >
                  {discount && fCurrency(price)}
                </Typography>
              )}
            </Typography>
          </Stack>
          {discount > 0 && (
            <Label variant="outlined" color="error">
              -{discount}%
            </Label>
          )}
        </Box>
      </Stack>
      <Box
        sx={{
          width: "100%",
          px: 2,
          pb: 2,
          position: "absolute",
          top: "98%",
          left: 0,
          opacity: 0,
          visibility: "hidden",
          zIndex: 10,
          backgroundColor: (theme) => theme.palette.background.paper,
          boxShadow: (theme) => theme.shadows[1],
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
        }}
        className="card-action"
      >
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleClickAddToCart}
            >
              {/* <Iconify icon='mdi:add-shopping-cart' width={24} height={24} />
              &nbsp; */}
              Add To Cart
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" color="warning" fullWidth>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductCard;
