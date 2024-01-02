import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const RHFUploadFile = ({
  name,
  handleSelectFile,
  imageRef,
  style,
  tabIndex,
}: {
  name: string;
  handleSelectFile: (file: File) => void;
  tabIndex: number;
  style: React.CSSProperties;
  imageRef: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <input
            type="file"
            style={style}
            tabIndex={tabIndex}
            onChange={(e) => {
              if (e.target.files) {
                const file = e.target.files[0];
                field.onChange(file);

                if (file) {
                  handleSelectFile(file);
                }
              }
            }}
            ref={(instance) => {
              field.ref(instance);
              imageRef.current = instance;
            }}
          />
        </>
      )}
    />
  );
};

export default RHFUploadFile;
