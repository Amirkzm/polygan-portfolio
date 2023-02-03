import { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ backgroundColor: theme.palette.background.paper }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
