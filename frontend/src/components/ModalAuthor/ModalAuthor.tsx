import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  chakra,
  Text,
  useDisclosure,
  Avatar,
  Flex,
  useColorModeValue,
  VisuallyHidden,
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

export function ModalAuthor() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        _focus={{ borderWidth: "none" }}
        sx={{ padding: 0, }}
        _hover={{
          textDecoration: "underline",
        }}
        fontSize="12px"
        fontFamily="Poppins"
        fontWeight="400"
        variant="none"
        onClick={onOpen}
      >
        Mais detalhes
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="bgSidebar" align="center" borderRadius="xl" p="6">
          <ModalHeader>
            <Avatar name="Victor Hugo" size="xl" boxShadow="md" />
          </ModalHeader>
          <ModalHeader>Desirae Bator</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            fontFamily="Poppins"
            fontSize="sm"
            fontWeight="400"
            textAlign="center"
          >
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              repellat voluptatum delectus saepe dolores architecto? Quo,
              exercitationem maxime, ipsam voluptatibus ut, animi cumque nemo
              quod harum velit consequatur voluptate magni.
            </Text>
          </ModalBody>

          <ModalFooter alignSelf={"center"}>
            <Stack direction={"row"} spacing={4} py={6}>
              <SocialButton label={"Discord"} href={"#"}>
                <BsDiscord color="black" />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter color="black" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram color="black" />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaLinkedin color="black" />
              </SocialButton>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
