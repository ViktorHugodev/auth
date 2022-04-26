import {
  Box,
  chakra,
  Container, Heading, Link,
  SimpleGrid,
  Stack,
  Text, useColorModeValue, VisuallyHidden
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsDiscord } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"white"}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"700"} fontSize={"20px"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg="bgSidebar" color={"gray.700"} py={16} zIndex="-1"letterSpacing={1.016} >
      <Container as={Stack} maxW={"6xl"} py={12} px={12}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}mr="8">
            <Box >
              <Heading
                letterSpacing={1.4}
                color="white"
                fontFamily={"Poppins"}
                fontWeight="700"
                fontSize={"2xl"}
              >
                TheMembers.
              </Heading>
            </Box>
            <Text
          
              fontFamily={"Poppins"}
              fontSize="14px"
              color="white"
              w="400px"
              fontWeight="400"
            >
              Industry leaders in community moderation and Discord server
              development for Web3, DeFi, and NFT projects.
            </Text>
            <Stack direction={"row"} spacing={4} py={6}>
              <SocialButton label={"Discord"} href={"#"}>
                <BsDiscord />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter color="black" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack spacing={4} align={"flex-start"} fontFamily="Poppins" fontWeight="400" fontSize="16px" color="white">
            <ListHeader >Quick Links</ListHeader>
            <Link href={"#"}>Linktree</Link>
            <Link href={"#"}>Imprint</Link>

          </Stack>
          <Stack align={"flex-start"} spacing={4} fontFamily="Poppins" fontWeight="400" fontSize="16px" color="white">
            <ListHeader>About</ListHeader>
            <Link href={"#"}>Medium</Link>
            <Link href={"#"}>Biography</Link>
   
          </Stack>
          <Stack align={"flex-start"}  spacing={4}fontFamily="Poppins" fontWeight="400" fontSize="16px" color="white">
            <ListHeader>Career</ListHeader>
            <Link href={"#"}>Jobs</Link>
            <Link href={"#"}>Resources</Link>
   
          </Stack>

       

      
        
    
        </SimpleGrid>
        <Text 
        fontFamily={"Poppins"}
        fontWeight="400"
        textAlign={"center"} color="white">
          All rights reserved | TheMembers. | 2022
        </Text>
      </Container>
    </Box>
  );
}
