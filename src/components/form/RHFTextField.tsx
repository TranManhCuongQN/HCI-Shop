import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

const RHFTextField = ({
  name,
  label,
  multiline,
  minRows,
  type,
  InputProps,
}: {
  name: string;
  label?: string;
  multiline?: boolean;
  minRows?: number;
  type?: TextFieldProps["type"];
  InputProps?: TextFieldProps["InputProps"];
}) => {
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
          label={label}
          multiline={multiline}
          type={type}
          InputProps={InputProps}
          minRows={minRows}
        />
      )}
    />
  );
};

export default RHFTextField;
