import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  ListItemText,
  Checkbox,
  FormHelperText,
} from "@mui/material";

const RHFTextField = ({
  name,
  data,
  defaultValue,
  id,
  label,
  items,
  onItemsChange,
}: {
  name: string;
  data: any[];
  defaultValue: any;
  id: string;
  label: string;
  items: any[];
  onItemsChange: any;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            {...field}
            labelId={id}
            label={id}
            multiple
            onChange={(event) => {
              onItemsChange(event.target.value);
              field.onChange(event.target.value);
            }}
            value={items}
            error={!!error}
            defaultValue={defaultValue}
            renderValue={(selected) => {
              const values: string[] = [];
              selected.forEach((item: string) => {
                const value = data.find((e) => e.id === item);
                values.push(value?.name);
              });

              return values.join(", ");
            }}
          >
            {data.map((item) => (
              <MenuItem value={item?.id} key={item?.id}>
                <Checkbox checked={items.indexOf(item?.id) > -1} />
                <ListItemText primary={item?.name} />
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default RHFTextField;
