import type { AppProps } from "next/app";
import { useCronitor } from "@cronitorio/cronitor-rum-nextjs";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const isDev = process.env.NODE_ENV === "development";

  useCronitor(isDev ? "b65c92e9edc0881fe75c99416e13ec23" : "e6be6b067ce300f80f8ef9753938ad9a", {
    debug: isDev,
    scriptSrc: "/cronitor.js",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
