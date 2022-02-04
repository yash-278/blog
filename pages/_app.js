import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import "next-pagination/dist/index.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
