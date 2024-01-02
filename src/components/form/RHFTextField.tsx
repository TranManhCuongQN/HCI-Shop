import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const RHFTextField = ({ name }: { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? 0
              : field.value
          }
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default RHFTextField;
