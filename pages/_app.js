import React from "react";
import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import "prismjs/themes/prism-okaidia.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
