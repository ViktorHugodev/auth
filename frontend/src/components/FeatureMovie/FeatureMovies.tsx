import {
  Box,
  Button,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
export function FeatureMovies() {
  return (
    <Flex
      position="relative"
      h="100vh"

      mx="auto"
      maxWidth={1440}
      backgroundImage="/images/bg-home.jpg"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition={"top center"}
    >
      <Box
        px="60px"
        h="100%"
        width="100%"

        backgroundColor="rgba(0, 0, 0, 0.39)"
        bgGradient="linear-gradient( 0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.20211834733893552) 60%, rgba(0, 0, 0, 0) 100% )"
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
        <Button

          position="relative"
          top="53%"
          letterSpacing="1px"
          mt="4"
          fontSize="16px"
          _hover={{ color: "black" }}
          minW="190px"
          fontFamily="Poppins"
          fontWeight="700"
          variant="solid"
          colorScheme="blue"
          minH="50px"
        >
          Something
        </Button>
      </Box>
    </Flex>
  );
}
