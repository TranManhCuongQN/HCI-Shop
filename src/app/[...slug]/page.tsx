"use client";
import Iconify from "@/components/iconify/Iconify";
import { fCurrency } from "@/utils/format-number";
import { Box, Button, Grid, Rating, Stack, Typography } from "@mui/material";
import * as React from "react";
import SyncSlider from "./components/Slider/SyncSlider";
import DashDivider from "./components/DashDivider";
import SpecificationsButton from "./components/SpecificationsButton";
import ColorButton from "./components/ColorButton";
import QuantityControl from "@/components/quantity-control/QuantityControl";
import { useParams } from "next/navigation";
import { getId } from "@/utils/common";

const variantColors = [
  {
    id: "1",
    color: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/1536px-Red_Color.jpg",
    realPrice: 1000000,
  },
  {
    id: "2",
    color: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG",
    realPrice: 2000000,
  },
];

const productSingle = {
  media: [
    "https://i.pinimg.com/564x/02/1a/d0/021ad0d74c29cb8b55029d50b9b3f6a4.jpg",
    "https://i.pinimg.com/564x/59/9e/82/599e82478d4c9a53166027e677537d85.jpg",
    "https://i.pinimg.com/564x/07/11/da/0711da2ceb094dbbb08e22d06339d200.jpg",
    "https://i.pinimg.com/736x/5f/e2/11/5fe21127aa88fa886950ce60444a3c7b.jpg",
    "https://i.pinimg.com/564x/db/f5/6e/dbf56e5a46e684c3f65b96dccbff9233.jpg",
  ],
  name: "Product Name",
  averageRating: 4.5,
  numReviews: 10,
  price: 10000000,
  discount: 20,
  warehouse: 10,
  specifications: "S",
  sameOriginProducts: [
    {
      realPrice: 1000000,
      id: "1",
      specifications: "S",
    },
    {
      realPrice: 2000000,
      id: "2",
      specifications: "M",
    },
  ],
};

export default function ProductIdPage() {
  const params = useParams();
  const id = getId(params.slug[1]);
  const [quantity, setQuantity] = React.useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };
  return (
    <>
      <Grid container spacing={4} sx={{ pt: 2 }}>
        <Grid item xs={12} md={6}>
          <SyncSlider images={productSingle.media} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <Typography variant="h5" component="h1">
              {productSingle.name}
            </Typography>
            {productSingle.averageRating > 0 && (
              <Stack spacing={1} direction="row">
                <Rating
                  readOnly
                  value={productSingle.averageRating}
                  precision={0.5}
                />
                <Typography variant="body1" color="text.secondary">
                  {`(${productSingle.numReviews} ${
                    productSingle.numReviews > 1 ? "reviews" : "review"
                  })`}
                </Typography>
              </Stack>
            )}
            <Stack spacing={1} direction="row" alignItems="center">
              <Typography variant="h3" component="span" color="error">
                {fCurrency(
                  productSingle.price -
                    productSingle.price * (productSingle.discount / 100)
                )}
              </Typography>
              <Typography variant="h4" component="span" color="text.secondary">
                <s>{fCurrency(productSingle.price)}</s>
              </Typography>
            </Stack>
          </Stack>
          <DashDivider />
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {productSingle.sameOriginProducts.map((variant) => {
              if (variant.id === id) {
                return (
                  <Grid item xs={12} md={6} key={variant.id}>
                    <SpecificationsButton
                      variant={variant}
                      select={
                        variant.specifications === productSingle.specifications
                      }
                    />
                  </Grid>
                );
              }

              if (variant.specifications !== productSingle.specifications) {
                return (
                  <Grid item xs={12} md={6} key={variant.id}>
                    <SpecificationsButton
                      variant={variant}
                      select={
                        variant.specifications === productSingle.specifications
                      }
                    />
                  </Grid>
                );
              }

              return <React.Fragment key={variant.id} />;
            })}
          </Grid>
          <Box sx={{ mt: 2, mb: 3, width: "100%" }}>
            <Typography variant="body1">Colors</Typography>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              {variantColors.map((variant) => (
                <Grid item key={variant.id} xs={12} md={4}>
                  <ColorButton colorItem={variant} select={variant.id === id} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <DashDivider />
          <Stack spacing={3} sx={{ mt: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body1">Quantity</Typography>
              <QuantityControl
                quantity={quantity}
                increaseQuantity={handleIncreaseQuantity}
                decreaseQuantity={handleDecreaseQuantity}
                max={productSingle?.warehouse}
              />
            </Box>
          </Stack>
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                type="button"
              >
                <Iconify
                  icon="material-symbols:add-shopping-cart-outline-rounded"
                  width={24}
                  height={24}
                />
                Add To Cart
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="button"
                variant="contained"
                color="warning"
                fullWidth
                size="large"
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={7}>
          <StyledPaper sx={{ px: 2, pt: 2 }}>
            <Typography variant='h6' component='h1' color='text.primary' sx={{ mb: 2 }}>
              Description
            </Typography>
            <ShowMoreParagraph
              isDanger={true} content={productSingle.description}
              height={productSingle?.description?.length > 200 ? '190px': 'auto'}
              canShowMore={productSingle?.description?.length > 200 ? true: false}
            />
            <Box sx={{ pb: 6 }} />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={5}>
          <StyledPaper sx={{ p: 2 }}>
            <Typography variant='h6' component='h1' color='text.primary' sx={{ mb: 2 }}>
              Information
            </Typography>
            <Typography
              variant='body1'
              color='text.primary'
              dangerouslySetInnerHTML={createMarkup(productSingle?.information)}
              sx={{
                '& span': {
                  color: 'inherit !important',
                  backgroundColor: 'inherit !important',
                  width: 'auto'
                },
              }}
            />
          </StyledPaper>
        </Grid>
      </Grid> */}

      {/* <RelatedProducts currentObjectID={id} />
      <ReviewSection
        id={id}
        productSingle={productSingle}
      />
      <CommentSection productId={id} /> */}
    </>
  );
}
