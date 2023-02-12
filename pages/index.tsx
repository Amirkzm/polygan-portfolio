import Head from "next/head";
import AnimatedLogo from "../components/icons/AnimatedLogo";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoadingContext from "../context/LoadingContext";
import PathContainer from "../components/Container/PathContainer";

export default function Home() {
  const loadingCtx = useContext(LoadingContext);

  useEffect(() => {
    if (loadingCtx.isLoading) {
      loadingCtx.finishLoading();
    }
  }, [loadingCtx.isLoading]);

  console.log(loadingCtx.isLoading);

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
        {loadingCtx.isLoading && <AnimatedLogo />}
        {!loadingCtx.isLoading && (
          <PathContainer>
            <Layout />
          </PathContainer>
        )}
      </main>
    </>
  );
}
