import { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Amir Kazemi Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ backgroundColor: theme.palette.background.paper }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
