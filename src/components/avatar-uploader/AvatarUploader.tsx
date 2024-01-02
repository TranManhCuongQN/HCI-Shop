import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

import {
  StyledAvatar,
  StyledBoxImage,
  StyledDisplayUploader,
  StyledUploaderArea,
  StyledImageWrapper,
  StyledPlaceHolder,
} from "./styles";
import Iconify from "../iconify/Iconify";
import RHFUploadFile from "../form/RHFUploadFile";

interface AvatarUploaderInterface {
  avatarUrl?: string;
  name: string;
}

const AvatarUploader = (props: AvatarUploaderInterface) => {
  const { avatarUrl, name } = props;
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>(avatarUrl as string);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClick = async () => {
    imageRef?.current?.click();
  };

  const handleSelectFile = (file: File) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);

      setImage(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);

  return (
    <StyledUploaderArea role="presentation" tabIndex={0}>
      <RHFUploadFile
        name={name}
        style={{ display: "none" }}
        tabIndex={-1}
        imageRef={imageRef}
        handleSelectFile={handleSelectFile}
      />

      <StyledDisplayUploader component="span">
        <StyledImageWrapper>
          {image ? (
            <StyledBoxImage alt="avatar" src={image} />
          ) : (
            <StyledAvatar />
          )}
        </StyledImageWrapper>
      </StyledDisplayUploader>
      <StyledPlaceHolder onClick={handleClick}>
        <Iconify icon="ant-design:camera-outlined" width={25} height={25} />
        <Typography variant="body1" color="white">
          Upload Photo
        </Typography>
      </StyledPlaceHolder>
    </StyledUploaderArea>
  );
};

export default AvatarUploader;
