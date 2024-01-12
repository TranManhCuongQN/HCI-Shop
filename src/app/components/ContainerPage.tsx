"use client";
import { Container } from "@mui/material";
import * as React from "react";

export interface IContainerPageProps {
  children: React.ReactNode;
}

export function ContainerPage(props: IContainerPageProps) {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 20 }}>
      {props.children}
    </Container>
  );
}
