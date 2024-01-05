"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MediaCard from "@/components/media-card";
import { Button } from "@mui/material";
import Banners from "@/components/banner/Banners";
import ProductListSection from "@/components/product-list-section/ProductListSection";

const BANNER_CONTENT = [
  {
    field: "sub",
    id: "0",
    image: "https://source.unsplash.com/random",
  },
  {
    field: "sub",
    id: "1",
    image: "https://source.unsplash.com/random",
  },
  {
    field: "sub",
    id: "2",
    image: "https://source.unsplash.com/random",
  },
  {
    field: "main",
    id: "4",
    image: "https://source.unsplash.com/random",
  },
  {
    field: "main",
    id: "5",
    image: "https://source.unsplash.com/random",
  },
  {
    field: "main",
    id: "6",
    image: "https://source.unsplash.com/random",
  },
];

const laptopsToShow = [
  {
    id: "1",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "2",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "3",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "4",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "5",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "6",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "7",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "8",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "9",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
  {
    id: "10",
    name: "Laptop 1",
    media: ["https://source.unsplash.com/random"],
    price: 100,
    discount: 0,
    averageRating: 4,
  },
];

export default function HomePage() {
  return (
    <>
      <Box sx={{ py: 2 }}>
        <Banners banners={BANNER_CONTENT} />
      </Box>
      <ProductListSection
        title="Laptops"
        products={laptopsToShow}
        value="Laptop"
        path="/laptops"
      />
    </>
  );
}
