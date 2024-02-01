import React from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ProductFavorite from "./components/ProductFavorite";

const favorites = [
  {
    id: "1",
    productName: "Laptop 1",
    image: "https://source.unsplash.com/random",
    totalHeart: 100,
    createdAt: "2021-10-10",
    productId: "1",
  },
  {
    id: "2",
    productName: "Laptop 2",
    image: "https://source.unsplash.com/random",
    totalHeart: 100,
    createdAt: "2021-10-10",
    productId: "2",
  },
  {
    id: "3",
    productName: "Laptop 3",
    image: "https://source.unsplash.com/random",
    totalHeart: 100,
    createdAt: "2021-10-10",
    productId: "3",
  },
];

const ProfileFavorites = () => {
  return (
    <>
      <Typography variant="h6" component="h1">
        My Favorites
      </Typography>
      <Stack sx={{ my: 3 }} spacing={3}>
        {favorites.map((favorite, index) => (
          <>
            <ProductFavorite key={favorite.id} favorite={favorite} />
            {index < favorites.length - 1 && <Divider />}
          </>
        ))}
      </Stack>
    </>
  );
};

export default ProfileFavorites;
