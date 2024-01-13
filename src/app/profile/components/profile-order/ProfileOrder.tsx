import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Pagination, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ORDER_STATUS, STATUS } from "@/constants/order-status";
import Order from "./components/Order";

const orders = [
  {
    id: "1",
    orderDate: "2021-10-10",
    status: STATUS.PAID,
    price: 100,
    orderItems: [
      {
        id: "1",
        productName: "Laptop 1",
        image:
          "https://i.pinimg.com/564x/d7/47/d1/d747d1ca901acf7ed3561ffcd79a0720.jpg",
        quantity: 2,
        productPrice: 100,
      },
      {
        id: "2",
        productName: "Laptop 1",
        image:
          "https://i.pinimg.com/564x/75/b0/7f/75b07fe969f16e508bebf5addc4d6a62.jpg",
        quantity: 2,
        productPrice: 100,
      },
    ],
    paymentType: "cash",
  },
  {
    id: "2",
    orderDate: "2021-10-10",
    status: STATUS.PROCESSING,
    price: 100,
    orderItems: [
      {
        id: "1",
        productName: "Laptop 1",
        image:
          "https://i.pinimg.com/564x/f7/29/8a/f7298a9abb9a0f0550f9d50e8e3ba517.jpg",
        quantity: 2,
        productPrice: 100,
      },
      {
        id: "2",
        productName: "Laptop 2",
        image:
          "https://i.pinimg.com/564x/59/9e/82/599e82478d4c9a53166027e677537d85.jpg",
        quantity: 2,
        productPrice: 100,
      },
    ],
    paymentType: "vnPay",
  },
  {
    id: "3",
    orderDate: "2021-10-10",
    status: STATUS.DELIVERED,
    price: 100,
    orderItems: [
      {
        id: "1",
        productName: "Laptop 1",
        image:
          "https://i.pinimg.com/564x/02/1a/d0/021ad0d74c29cb8b55029d50b9b3f6a4.jpg",
        quantity: 2,
        productPrice: 100,
      },
      {
        id: "2",
        productName: "Laptop 2",
        image:
          "https://i.pinimg.com/564x/5b/7e/65/5b7e6571e6a6a8a9c65d48b9ae8f7af6.jpg",
        quantity: 2,
        productPrice: 100,
      },
    ],
    paymentType: "credit",
  },
];

const StyledBox = styled(Box)(({ theme }) => ({
  "& .slick-slide": {
    width: "auto !important",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
}));

const ProfileOrders = () => {
  const [nav, setNav] = useState<Slider | null>(null);
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState<string>(STATUS.ALL);

  const navSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleClick = (value: string) => () => {
    setFilterStatus(value);
  };

  const handlePageChange = (event: any, page: number) => {
    setPage(page);
  };

  return (
    <>
      <StyledBox>
        <Slider {...navSettings} ref={(slider) => setNav(slider)}>
          {ORDER_STATUS.map((status) => (
            <Box sx={{ mr: 2 }} key={status}>
              <StyledButton
                size="small"
                disableElevation
                variant={filterStatus === status ? "contained" : "text"}
                color={filterStatus === status ? "primary" : "inherit"}
                onClick={handleClick(status)}
              >
                {status}
              </StyledButton>
            </Box>
          ))}
        </Slider>
      </StyledBox>

      <Stack spacing={3} sx={{ mt: 6 }}>
        {orders.map((order, index) => (
          <Box key={order.id} sx={{ width: "100%" }}>
            <Order key={order.id} order={order} />
            {index < orders.length - 1 && <Divider sx={{ mt: 4, mb: 2 }} />}
          </Box>
        ))}
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 2,
        }}
      >
        <Pagination
          count={2}
          color="primary"
          onChange={handlePageChange}
          page={page}
        />
      </Box>
    </>
  );
};

export default ProfileOrders;
