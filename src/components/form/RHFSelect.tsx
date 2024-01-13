import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";

const RHFSelect = ({
  name,
  id,
  label,
  defaultValue,
  data,
  onChange,
  disabled,
}: {
  name: string;
  id?: string;
  label?: string;
  defaultValue?: any;
  data?: any[];
  onChange?: (data: any) => void;
  disabled?: boolean;
}) => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <Select
                {...field}
                fullWidth
                disabled={disabled}
                labelId={id}
                label={label}
                value={field.value}
                // Todo
                onClose={() => {
                  setOpen(false);
                }}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  onChange && onChange(event.target.value);
                }}
                onOpen={() => setOpen(true)}
                open={open}
                displayEmpty={true}
                MenuProps={{
                  variant: "menu",
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                }}
                error={!!error}
                defaultValue={defaultValue}
              >
                {data?.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText
                sx={{
                  color: (theme) => theme.palette.error.main,
                }}
              >
                {error?.message}
              </FormHelperText>
            </>
          );
        }}
      />
    </FormControl>
  );
};

export default RHFSelect;
