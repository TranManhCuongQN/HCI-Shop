"use client";
import ProductListSection from "@/components/product-list-section/ProductListSection";
import { Box, Button } from "@mui/material";
import * as React from "react";

export interface IPhoneProps {
  products: {
    id: string;
    name: string;
    media: string[];
    price: number;
    discount: number;
    averageRating: number;
  }[];
}

export function PhoneList(props: IPhoneProps) {
  return (
    <>
      <ProductListSection
        title="Smartphones"
        products={props.products}
        value="Smartphone"
        path="/smartphones"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 1,
          mb: 3,
        }}
      >
        {/* <Button variant="outlined">Show more</Button> */}
      </Box>
    </>
  );
}
