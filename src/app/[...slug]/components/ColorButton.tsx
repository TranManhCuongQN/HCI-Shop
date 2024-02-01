import * as React from "react";
import { StyledBox, StyledCard, StyledSelected } from "./styles";
import Iconify from "@/components/iconify/Iconify";
import { Stack, Typography } from "@mui/material";
import { fCurrency } from "@/utils/format-number";
import { COLOR_LIST } from "@/constants/color";
import Image from "next/image";

export interface IColorButtonProps {
  select?: boolean;
  colorItem: {
    color: number;
    image: string;
    realPrice: number;
    id: string;
  };
}

export default function ColorButton(props: IColorButtonProps) {
  const { select, colorItem } = props;
  return (
    <StyledBox
      component="button"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        border: "none",
        cursor: "pointer",
      }}
    >
      <StyledCard className={select ? "active" : ""}>
        <StyledSelected className="check">
          <Iconify icon="material-symbols:check" width={16} height={16} />
        </StyledSelected>
        <Stack spacing={1} direction="row" alignItems="center">
          <Image
            src={colorItem.image}
            alt="image"
            width={48}
            height={48}
            style={{
              objectFit: "cover",
              borderRadius: 1,
              objectPosition: "center",
            }}
          />
          <Stack spacing={0.5}>
            <Typography variant="body2" color="text.primary" textAlign="center">
              {COLOR_LIST[colorItem.color]}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              {fCurrency(colorItem.realPrice)}
            </Typography>
          </Stack>
        </Stack>
      </StyledCard>
    </StyledBox>
  );
}
