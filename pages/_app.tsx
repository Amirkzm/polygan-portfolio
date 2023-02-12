import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import "../styles/global.css";
import LoadingContext, { LoadingProvider } from "../context/LoadingContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const loadingCtx = useContext(LoadingContext);
  console.log(loadingCtx.isLoading);
  return (
    <LoadingProvider>
      <ThemeProvider theme={theme}>
        {/* {!loadingCtx.isLoading && <Header />} */}
        {/* {console.log(loadingCtx.isLoading)} */}
        <Component {...pageProps} />
        {/* {!loadingCtx.isLoading && <Footer />} */}
      </ThemeProvider>
    </LoadingProvider>
  );
}
