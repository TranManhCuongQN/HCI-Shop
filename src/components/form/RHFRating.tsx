import React from "react";
import { Rating, Stack, Typography } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const RHFRating = ({ name }: { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack spacing={1} direction="row" alignItems="center">
          <Rating {...field} />
          <Typography variant="caption" color="error">
            {error?.message}
          </Typography>
        </Stack>
      )}
    />
  );
};

export default RHFRating;
