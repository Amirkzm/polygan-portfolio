import Head from "next/head";
import AnimatedLogo from "../components/icons/AnimatedLogo";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const startLoading = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(startLoading);
  }, []);

  return (
    <>
      <Head>
        <title>Amir Kazemi Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Amir Kazemi built with react and next.js"
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main>
        {isLoading && <AnimatedLogo />}
        {!isLoading && <Layout />}
      </main>
    </>
  );
}
