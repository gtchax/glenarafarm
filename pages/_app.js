import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {Component.authPage ? (
        <Layout bg="false">
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Layout bg="true">
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
}

export default MyApp;
