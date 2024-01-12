import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Iconify from "@/components/iconify/Iconify";
import { fCurrency } from "@/utils/format-number";
import Image from "next/image";

const ProductItem = ({
  item,
}: {
  item: {
    productName: string;
    image: string;
    quantity: number;
    productPrice: number;
  };
}) => {
  const { productName, image, quantity, productPrice } = item;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack spacing={1} direction="row" sx={{ minWidth: 250 }}>
        <Image
          src={image}
          alt={productName}
          width={56}
          height={56}
          style={{
            objectFit: "cover",
            borderRadius: 1,
          }}
        />
        <Stack spacing={0.5}>
          <Typography variant="subtitle1" color="text.primary">
            {productName}
          </Typography>
          <Stack spacing={1} direction="row">
            <Iconify
              icon="fluent-mdl2:quantity"
              width={24}
              height={24}
              sx={{ color: "text.secondary" }}
            />
            <Typography variant="body1" color="text.primary">
              {quantity}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography variant="subtitle1" color="text.primary">
        {fCurrency(productPrice * quantity)}
      </Typography>
    </Box>
  );
};

export default ProductItem;
