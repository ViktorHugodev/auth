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
  Image,
  Text,
  useDisclosure,
  useColorModeValue,
  VisuallyHidden,
  Box,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsDiscord } from "react-icons/bs";

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

export function ModalChangePassword() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        sx={{ padding: 0 }}
        alignSelf="flex-start"
        _hover={{
          bg: "red.dash",
        }}
        fontSize="smaller"
        width="170px"
        fontFamily="Poppins"
        fontWeight="600"
        variant="ghost"
        onClick={onOpen}
        height="40px"
        bg={"gray.dash"}
      >
        Editar senha
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="bgSidebar"   borderRadius="xl" p="6">
          <ModalHeader>
            <Image
              position="relative"
              left="50%"
              src="/images/logo-q.png"  
              width="140px"
              height="40px"
              transform='translate(-50%, -50%)'
              alt="logo"
            />
            <Text fontWeight="normal" textAlign="center">
              Para a sua segurança confirme sua senha
            </Text>
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody
            fontFamily="Poppins"
            fontSize="sm"
            fontWeight="400"
            textAlign="center"
            height="100%"
          >
            <chakra.form w="100%">
              <VStack w="100%" spacing={6}>
                <Box w="100%">
                  <FormLabel mt="4">Senha antiga</FormLabel>
                  <Input
                    type="password"
                    border="none"
                    focusBorderColor="blue.500"
                    variant="outline"
                    bgColor="gray.dash"
                    placeholder="Senha antiga"
                    w="100%"
                  />
                </Box>
                <Box w="100%">
                  <FormLabel m="0">Senha nova</FormLabel>
                  <Input
                    type="password"
                    border="none"
                    focusBorderColor="blue.500"
                    variant="outline"
                    bgColor="gray.dash"
                    placeholder="Nova senha"
                    w="100%"
                  />
                </Box>
                <Box w="100%">
                  <FormLabel m="0">Repita nova senha</FormLabel>
                  <Input
                    type="password"
                    border="none"
                    focusBorderColor="blue.500"
                    variant="outline"
                    bgColor="gray.dash"
                    placeholder="Confirme sua senha"
                    w="100%"
                  />
                </Box>
                <Button
                  _hover={{
                    bg: "red.main",
                  }}
                  fontSize="smaller"
                  width="100%"
                  fontFamily="Poppins"
                  fontWeight="600"
                  variant="ghost"
                  onClick={onOpen}
                  height="40px"
                  bg={"red.dash"}
                >
                  CONTINUAR
                </Button>
              </VStack>
            </chakra.form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
