import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Navbar from "../components/navbar";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <Script
          src="/assets/js/vendor.js"
          strategy="beforeInteractive"
        ></Script> */}
      </body>
    </Html>
  );
}
