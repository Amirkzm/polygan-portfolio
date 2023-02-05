import Head from "next/head";
import { Inter } from "@next/font/google";
import AnimatedLogo from "../components/icons/AnimatedLogo";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAnimatedLogo, setShowAnimatedLogo] = useState<boolean>(false);

  useEffect(() => {
    const begin = setTimeout(() => {
      setIsLoading(true);
    }, 10);
    const start = setTimeout(() => {
      setShowAnimatedLogo(true);
    }, 1000);

    const end = setTimeout(() => {
      setShowAnimatedLogo(false);
    }, 3000);

    const finish = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(begin);
      clearTimeout(start);
      clearTimeout(finish);
      clearTimeout(end);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Amir Kazemi Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Amir Kazemi powered by react and next.js"
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main>
        {isLoading && <AnimatedLogo toggle={showAnimatedLogo} />}
        <Layout />
      </main>
    </>
  );
}
