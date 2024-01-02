import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const RHFFilesUpload = ({
  name,
  acceptTypes,
}: {
  name: string;
  acceptTypes: string;
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <input type="file" accept={acceptTypes} multiple />
      )}
    />
  );
};

export default RHFFilesUpload;
