import React from "react";
import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import "prismjs/themes/prism-okaidia.css";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-dark-bg bg-light-bg transition-colors duration-200">
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
