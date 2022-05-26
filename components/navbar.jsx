import React from "react";
import { Box, HStack, Button, Flex, Image, Show, Hide } from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ bg }) => {
  const router = useRouter();
  return (
    <Box px="9" py="4" bg="transparent">
      <Flex justifyContent="space-between" alignItems="center">
        <Show below="md">
          <Link href="/" style={{ cursor: "pointer" }}>
            <Image alt="Glenara farm logo" src="/logo2.png" height="90px" cursor={'pointer'} />
          </Link>
        </Show>
        <Hide below="md">
          <Link href="/" style={{ cursor: "pointer" }}>
            <Image alt="Glenara farm logo" src="/logo1.png" height="90px"  cursor={'pointer'} />
          </Link>
        </Hide>

        <Box ml="auto">
          {router.pathname !== "/signup" && (
            <HStack spacing="2">
              <Button
                variant="outline"
                boxShadow="md"
                borderRadius="1"
                colorScheme="facebook"
              >
                Farmer Login
              </Button>

              <Link href="/signup">
                <Button
                  variant="solid"
                  boxShadow="md"
                  borderRadius="1"
                  colorScheme="facebook"
                >
                  Farmer Signup
                </Button>
              </Link>
            </HStack>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
