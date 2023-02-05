import Head from "next/head";
import { Inter } from "@next/font/google";
import AnimatedLogo from "../components/icons/AnimatedLogo";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/material";
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {isLoading && <AnimatedLogo toggle={showAnimatedLogo} />}
        <Layout />
      </main>
    </>
  );
}
