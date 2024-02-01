"use client";
import FormProvider from "@/components/form/FormProvider";
import RHFTextField from "@/components/form/RHFTextField";
import { Box, Button, Dialog, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFSelect from "@/components/form/RHFSelect";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { RHFCheckbox } from "@/components/form/RHFCheckbox";

export interface IAddressFormProps {
  open: boolean;
  onClose: () => void;
}

export default function AddressForm(props: IAddressFormProps) {
  const { open, onClose } = props;
  const [provinceList, setProvinceList] = React.useState<any[]>([]);
  const [provinceId, setProvinceId] = React.useState<string>("");
  const [districtList, setDistrictList] = React.useState<any[]>([]);
  const [districtId, setDistrictId] = React.useState<string>("");
  const [wardList, setWardList] = React.useState<any[]>([]);

  const AddressFormSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone is required"),
    province: Yup.string().required("Province is required"),
    district: Yup.string().required("District is required"),
    ward: Yup.string().required("Ward is required"),
    homeAddress: Yup.string().required("Home Address is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    homeAddress: "",
  };

  const methods = useForm({
    resolver: yupResolver(AddressFormSchema),
    defaultValues,
  });

  const { handleSubmit, reset, setValue } = methods;

  const fetchProvince = async () => {
    const response = await axios.get("https://provinces.open-api.vn/api/p");
    setProvinceList(response.data);
  };

  const fetchDistrict = async () => {
    const { data } = await axios.get(
      `https://provinces.open-api.vn/api/p/${provinceId}?depth=2`
    );
    setDistrictList(data.districts);
  };

  const fetchWard = async () => {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/d/${districtId}?depth=2`
    );
    setWardList(response.data.wards);
  };

  React.useEffect(() => {
    fetchProvince();
  }, []);

  React.useEffect(() => {
    fetchDistrict();
  }, [provinceId]);

  React.useEffect(() => {
    fetchWard();
  }, [districtId]);

  const onChangeProvince = (data: any) => {
    const provinceCode = provinceList.find((value) => value.name === data);
    setProvinceId(provinceCode.code);
    setDistrictId("");
    setValue("district", "");
    setValue("ward", "");
  };

  const onChangeDistrict = (data: any) => {
    const districtCode = districtList.find((value) => value.name === data);
    setDistrictId(districtCode.code);
    setValue("ward", "");
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
    onClose();
    setProvinceId("");
    setDistrictId("");
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          p: 4,
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            mb: 2,
          }}
        >
          Recipient’s information
        </Typography>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <RHFTextField name="firstName" label="First Name" />
              <RHFTextField name="lastName" label="Last Name" />
            </Stack>
            <RHFTextField name="phone" label="Phone" />
          </Stack>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              my: 2,
            }}
          >
            Delivery address
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
              <RHFSelect
                name="province"
                label="Provice/City"
                id="Province/City"
                data={provinceList}
                onChange={onChangeProvince}
              />
              <RHFSelect
                name="district"
                label="District"
                id="District"
                data={districtList}
                onChange={onChangeDistrict}
                disabled={provinceId === ""}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <RHFSelect
                name="ward"
                label="Ward"
                id="Ward"
                data={wardList}
                disabled={districtId === ""}
              />
              <RHFTextField name="homeAddress" label="Home Address" />
            </Stack>
          </Stack>
          <Stack direction="row">
            <RHFCheckbox name="default" label="Set as default address" />
          </Stack>
          <Box
            sx={{
              mt: 1,
            }}
          >
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Save
            </LoadingButton>
          </Box>
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Button
              type="button"
              fullWidth
              color="error"
              variant="contained"
              onClick={() => {
                reset();
                onClose();
                setProvinceId("");
                setDistrictId("");
              }}
            >
              Cancel
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Dialog>
  );
}
