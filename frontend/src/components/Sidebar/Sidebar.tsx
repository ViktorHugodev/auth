import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Avatar,
  Text,
  Heading,
  Flex,
  Box,
  Progress,
} from "@chakra-ui/react";
import { useRef } from "react";

export function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef()

  return (
    <>
      <Avatar
        // ref={btnRef}
        cursor="pointer"
        name="Victor Hugo"
        fontSize="20"
        colorScheme="teal"
        boxShadow="md"

        size="smaller"
        onClick={onOpen}
      />
      <Drawer
      
        size="sm"
        colorScheme="blackAlpha"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent color="white">
          <DrawerCloseButton size="lg" />

          <DrawerBody bgColor="bgSidebar" py="14">
            <Flex justify="flex-start" align="center" color="white">
              <Avatar name="Victor Hugo" size="md" />
              <Box ml="4">
                <Heading
                  fontSize="20px"
                  fontWeight="700"
                  fontFamily="Poppins"
                  mb="1"
                >
                  Olá, Victor Hugo
                </Heading>
                <Text fontFamily="Poppins" fontWeight="400" fontSize="12px">
                  viktorhugo.dev@gmail.com
                </Text>
              </Box>
            </Flex>

            <Box w="100%" py="10">
              <Flex justify="space-between">
                <Heading fontSize="14px" fontFamily='Poppins' fontWeight="700">Seu progresso</Heading>
                <Text fontSize="12px" fontFamily='Poppins'>100% concluído</Text>
              </Flex>
              <Progress mt="4" borderRadius="5px"value={20} size="xs" color="red.main" />
            </Box>

            <Box mt="4">
              <Button
                _hover={{color: 'black'}}
                w="100%"
                fontFamily="Poppins"
                fontWeight="700"
                variant="solid"
                fontSize="md"
          
                colorScheme="blue"
                minH="50px"
              >
                Gerenciar perfil
              </Button>

              <Button
              border="2px"

                     minH="50px"
                  _hover={{bg: 'black'}}
                fontFamily="Poppins"
                fontWeight="400"
                mt="6"
                
                variant="outline"
                w="100%"
                colorScheme="blue"
              >
                Desconectar
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
