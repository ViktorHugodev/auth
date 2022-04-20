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
export function FeatureMovies() {
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
        <Flex
          direction="column"
          px="3"
          align="flex-end"
          fontFamily={"Poppins"}
          position="relative"
          top="33%"
        >
          <Avatar
            cursor="pointer"
            name="Victor Hugo"
            size="sm"
            boxShadow="md"
          />
          <Heading
            mt="2"
            fontSize="16px"
            fontFamily={"Poppins"}
            fontWeight="700"
          >
            Victor Hugo
          </Heading>
          <Link mt="2" fontSize="12px" href="#">
            mais detalhes
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}
