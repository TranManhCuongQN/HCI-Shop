import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { fYMDate } from "../../utils/format-time";

const RHFDateTextField = ({
  name,
  label,
}: {
  name: string;
  label?: string;
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
          type="date"
          error={!!error}
          helperText={error?.message}
          value={field.value ? fYMDate(field.value) : field.value}
          InputLabelProps={{
            shrink: true,
          }}
          label={label}
        />
      )}
    />
  );
};

export default RHFDateTextField;
