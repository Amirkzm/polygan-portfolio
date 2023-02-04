import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
