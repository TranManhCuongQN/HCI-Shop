import React from "react";
import { FormControl, FormLabel, Switch } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const RHFRadioGroup = ({
  name,
  id,
  label,
}: {
  name: string;
  id: string;
  label: string;
}) => {
  const { control } = useFormContext();
  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Switch {...field} />}
      />
    </FormControl>
  );
};

export default RHFRadioGroup;
