import React from "react";
import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.scss";
import "prismjs/themes/prism-okaidia.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
