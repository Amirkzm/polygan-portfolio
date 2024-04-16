import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import "../styles/global.css";
import LoadingContext, { LoadingProvider } from "../context/LoadingContext";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const loadingCtx = useContext(LoadingContext);
  return (
    <LoadingProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </LoadingProvider>
  );
}
