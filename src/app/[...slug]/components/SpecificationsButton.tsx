import { Link as MuiLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { StyledBox, StyledCard, StyledSelected } from "./styles";
import Iconify from "@/components/iconify/Iconify";
import { fCurrency } from "@/utils/format-number";

export interface ISpecificationsButtonProps {
  variant: {
    id: string;
    specifications: string;
    realPrice: number;
  };
  select?: boolean;
}

export default function SpecificationsButton(
  props: ISpecificationsButtonProps
) {
  const { variant, select } = props;
  return (
    <MuiLink component={Link} href={`/products/${variant.id}`} underline="none">
      <StyledBox>
        <StyledCard className={select ? "active" : ""}>
          <StyledSelected className="check">
            <Iconify icon="material-symbols:check" width={16} height={16} />
          </StyledSelected>
          <Stack spacing={0.5}>
            <Typography variant="body2" color="text.primary" textAlign="center">
              {variant.specifications}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              {fCurrency(variant.realPrice)}
            </Typography>
          </Stack>
        </StyledCard>
      </StyledBox>
    </MuiLink>
  );
}
