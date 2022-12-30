import type { AppProps } from "next/app";
import { usePanelbear } from "@panelbear/panelbear-nextjs";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const isDev = process.env.NODE_ENV === "development";

  usePanelbear(isDev ? "K4wFNleQnOd" : "4nAdeNcmVDX", {
    debug: isDev,
    scriptSrc: "/bear.js",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
