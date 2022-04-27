import {
  Avatar,
  Box,
  Button,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CertificadoButton } from "../Certificado/CertificadoButton";
export function FeatureMovies() {
  const router = useRouter();
  let isAulas = false;
  let isHomePage = false;
  if (router.pathname == "/curso/Aulas" ) {
    isAulas = true;
  }
  if (router.pathname == "/HomePage") {
    isHomePage = true;
  }
  console.log(router.pathname);
  console.log(isAulas);
  return (
    <Box
      w="100vw"
      h="730px"
      mx="auto"
      backgroundImage="/images/bg-home-mini.jpg"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={"top center"}
    >
      <Box
        px="10"
        h="100%"
        width="100%"
        backgroundColor="rgba(18, 18, 18, .25)"
        bgGradient="linear-gradient( 0deg, rgba(18, 18, 18, 1) 10%, rgba(18, 18, 18, .2) 60%, rgba(18, 18, 18, .3) 100% )"
      >
        <Heading
          fontFamily={"Poppins"}
          fontWeight="700"
          color="white"
          position="relative"
          top="50%"
        >
          God of war
        </Heading>
        <Text
          fontFamily="Poppins"
          fontWeight="400"
          position="relative"
          fontSize="1rem"
          top="52%"
          w="50%"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus aenean
          tortor euismod quis mauris. Vel maecenas malesuada quis dignissim
          viverra in penatibus.
        </Text>
        {isHomePage && (
          <Button
            position="relative"
            top="53%"
            letterSpacing="1px"
            mt="4"
            fontSize="16px"
            _hover={{ color: "black" }}
            minW="140"
            fontFamily="Poppins"
            fontWeight="700"
            variant="solid"
            colorScheme="blue"
            minH="50px"
          >
            Something
          </Button>
        )}
        {isAulas && (
          <Box position="relative" top="53%" w="80%">
            <CertificadoButton />
          </Box>
        )}

        <Flex
          direction="column"
          fontSize="md"
          fontFamily="Poppins"
          fontWeight="700"
          align="flex-end"
          position="relative"
          top="33%"
          mr="5"
        >
          <Avatar
    
            name="Victor Hugo"
            size="sm"
            boxShadow="md"
          />
          <Text mt="2">Victor Hugo</Text>
          <Link fontSize="12px" fontWeight="300" href="#">
            mais detalhes
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
