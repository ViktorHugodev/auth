/* eslint-disable react/no-children-prop */
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  InputGroup,
  RadioGroup,
  Stack,
  IconButton,
  Button,
  useDisclosure,
  Input,
  InputLeftElement,
  chakra,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
const CFiSearch = chakra(FiSearch);

const CGrClose = chakra(VscChromeClose);
export function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");

  return (
    <>
      <IconButton
        variant="none"
        size="lg"
        color="white"
        bg="transparent"
        onClick={onOpen}
        aria-label="Search database"
        icon={<HiOutlineSearch />}
      />

      <Drawer placement="top" size="lg" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor="transparent">
          <DrawerHeader color="transparent">Basic Drawer</DrawerHeader>
          <DrawerBody position="relative" bg="black" top="58">
            <Flex align="center" justify="center">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFiSearch color="white" fontSize="xl" />}
                />
                <Input
                  // _focus={{ boxShadow: `0 0 0 2px blue.500` }}
                  // border="2px"
                  fontSize="sm"
                  bgColor="gray.bgInput"
                  variant="none"
                  color="gray"
                  fontFamily="Poppins"
                  _placeholder={{ color: "gray", fontFamily: "Poppins" }}
                  w="80%"
                  placeholder="Search for a course or institution"
                />
              </InputGroup>
              <Button
                fontSize="16px"
                _hover={{ color: "black" }}
                minW="150px"
                fontFamily="Poppins"
                fontWeight="700"
                variant="solid"
                
                colorScheme="blue"
                minH="50px"
              >
                Search
              </Button>
              <IconButton
              onClick={onClose}
              _hover={{filter: 'brightness(.8)'}}
                ml="2"
                minH="50px"
                w="50px"
                bgColor="gray.bgButton"
                aria-label="Search database"
                // color="white"
                size="lg"
                icon={<CGrClose color="white" fontSize="24px" />}
              />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
