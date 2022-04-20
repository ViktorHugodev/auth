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
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Button,
  useDisclosure,
  Input,
  InputLeftElement,
  chakra,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
const CFiSearch = chakra(FiSearch);

const CGrClose = chakra(VscChromeClose);
export function SearchBar() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <IconButton
        variant="none"
        size="lg"
        border="none"
        color="white"
        bg="transparent"
        onClick={onToggle}
        aria-label="Search database"
        icon={<HiOutlineSearch size="24px" />}
      />
    
      <Fade in={isOpen}>
        <Box px="60px"
          boxShadow="lg"
          position="absolute"
          left="0"
          w="100%"
          color="white"
          mt="10"

          bg="black"
          py="12px"
          shadow="md"
        >
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
                _hover={{ filter: "brightness(.8)" }}
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
        </Box>
      </Fade>

    
    </>
  );
}
