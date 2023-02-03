import { styled } from "@mui/material";
import React from "react";

const StyledSection = styled("section")(({ theme }) => ({
  display: "flex",
  maxWidth: "1000px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "1.1",
  padding: "100px 10px",
  minHeight: "100vh",
}));

const SectionContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return <StyledSection id={id}>{children}</StyledSection>;
};

export default SectionContainer;
