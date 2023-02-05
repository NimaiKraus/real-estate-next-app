import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const GTM_ID = process.env.GTM_ID || "";

const tagManagerArgs = {
  gtmId: GTM_ID
}

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [])
  
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
