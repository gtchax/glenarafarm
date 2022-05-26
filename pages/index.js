import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Heading,
  Center,
  Text,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import Features from "../components/features";
import Hero from "../components/hero";

export default function Home() {
  return (
    <Box>
      {/* <Box bg="#ebcaa9" > */}
      <Head>
        <title>Glenara Farm</title>
        <meta name="description" content="FThe home of fresh produce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Hero />
      <Box minHeight="80vh" bg="#fff">
        <Heading fontWeight='bold' p='5'>How It Works</Heading>
        <Center height="80vh">
          <Features />
        </Center>
      </Box>
    </Box>
  );
}
