"use client";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import * as React from "react";
import { createPortal } from "react-dom";
import AddressForm from "./components/AddressForm";
import AddressItem from "./components/AddressItem";

export interface IAddressPageProps {}

const addressList = [
  {
    id: "1",
    name: "Pam",
    address:
      "1 Võ Văn Ngân , Phường Linh Chiểu , Quận Thủ Đức ,Thành phố Hồ Chí Minh",
    phone: "0987654321",
    default: true,
  },
  {
    id: "2",
    name: "Vy Hoa",
    address:
      "1 Võ Văn Ngân , Phường Linh Chiểu , Quận Thủ Đức ,Thành phố Hồ Chí Minh",
    phone: "0987654321",
    default: false,
  },
  {
    id: "3",
    name: "Cuong",
    address:
      "1 Võ Văn Ngân , Phường Linh Chiểu , Quận Thủ Đức ,Thành phố Hồ Chí Minh",
    phone: "0987654321",
    default: false,
  },
];

export default function AddressPage(props: IAddressPageProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Container
      sx={{
        mt: 4,
      }}
    >
      <Typography variant="h6" component="h1">
        My Address
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Box
        sx={{
          mt: 4,
        }}
      >
        <Button
          type="button"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            width: "100%",
          }}
          onClick={() => setOpen(true)}
        >
          {" "}
          Add address
        </Button>
      </Box>
      {typeof window !== "undefined" &&
        createPortal(
          <AddressForm open={open} onClose={onClose} />,
          document.body
        )}
      {addressList.map((address, index) => (
        <>
          <AddressItem key={address.id} address={address} />
          {index < addressList.length - 1 && <Divider />}
        </>
      ))}
    </Container>
  );
}
