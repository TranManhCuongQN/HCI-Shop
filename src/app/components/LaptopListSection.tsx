"use client";
import ProductListSection from "@/components/product-list-section/ProductListSection";
import { Box, Button } from "@mui/material";
import * as React from "react";

export interface ILaptopListProps {
  products: {
    id: string;
    name: string;
    media: string[];
    price: number;
    discount: number;
    averageRating: number;
  }[];
}

export function LaptopList(props: ILaptopListProps) {
  return (
    <>
      <ProductListSection
        title="Laptops"
        products={props.products}
        value="Laptop"
        path="/laptops"
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
