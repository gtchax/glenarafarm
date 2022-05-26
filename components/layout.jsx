import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";
import { useRouter } from "next/router";

const Layout = ({ children, bg }) => {
  const router = useRouter();
  

  return (
    <Box>
      {router.pathname === "/" ? (
        <Box
          bg="#ebcaa9"
          bgImage="linear-gradient(rgba(235, 202, 169, 0.90) 23%,rgba(235, 202, 169, 0), rgba(235, 202, 169, 0)) , url('/bg1.jpg')"
        >
          <Navbar />
          {children}
        </Box>
      ) : (
        <Box bg="#ebcaa9" bgColor={"rgb(235, 202, 169)"}>
          <Navbar />
          {children}
        </Box>
      )}
      {/* <Box
        bg="#ebcaa9"
        bgImage="linear-gradient(rgba(235, 202, 169, 0.90) 23%,rgba(235, 202, 169, 0), rgba(235, 202, 169, 0)) , url('/bg1.jpg')"
      >
        <Navbar /> 
        {children}
      </Box> */}
    </Box>
  );
};

export default Layout;
