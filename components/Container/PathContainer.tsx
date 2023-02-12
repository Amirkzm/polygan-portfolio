import { Container } from "@mui/material";
import React, { useContext } from "react";
import LoadingContext from "../../context/LoadingContext";
import Footer from "../Footer";
import Header from "../Header";

const PathContainer = ({ children }: { children: React.ReactNode }) => {
  const loadingCtx = useContext(LoadingContext);

  return (
    <Container>
      {!loadingCtx.isLoading && <Header />}
      {children}
      {!loadingCtx.isLoading && <Footer />}
    </Container>
  );
};

export default PathContainer;
