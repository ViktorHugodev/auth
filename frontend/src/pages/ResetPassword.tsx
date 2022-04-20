/* eslint-disable react/no-children-prop */
import {
  Avatar, Box, Button, chakra, Flex, FormControl,
  FormHelperText, Heading, Image, Text,
  Input, InputGroup, InputLeftElement, Stack
} from "@chakra-ui/react";
import { useState } from "react";
import {FaLock} from "react-icons/fa";
import {
  MdOutlineAlternateEmail,
  MdOutlineMarkEmailRead
} from "react-icons/md";
const CMdOutlineAlternateEmail = chakra(MdOutlineAlternateEmail);
const CMdOutlineMarkEmailRead = chakra(MdOutlineMarkEmailRead);
const CFaLock = chakra(FaLock);
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const handleShowClick = () => setShowPassword(!showPassword);
  //Colocar um before acima do login

  return (
    <Flex
      flexDirection="column"
      width="100vw"
      height="100vh"
      backgroundPosition="center"
      backgroundImage={[`/images/bg-kratos4.jpg`, `/images/bg-kratos2.jpg`]}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Avatar bg="teal.500" size="xl" src={`/images/logo.jpg`} mb="1rem" /> */}
        <Image
          boxShadow="sm"
          borderRadius="sm"
            src={`/images/logo.jpg`}
            height="100px"
            width="100px"
            alt="logo"
          />
        <Box minW={{ base: "20rem", sm: "25rem" }}>
          <form>
            <Stack
              position="relative"
              borderRadius="3xl"
              height="25rem"
              spacing={1}
              backgroundColor="#000000"
              boxShadow="md"
              alignItems="center"
            >
              <Flex
                width="full"
                direction="column"
                height="7rem"
                justify="space-around"
              >
                <Heading
                  textAlign="center"
                  fontSize="md"
                  color="white"
                  mt="1rem"
                  fontWeight="300"
                >
                  REDEFINA SUA SENHA
                </Heading>
                <Box
                  bgGradient="linear(to-r, rgba(255, 0, 0, 1), rgba(0, 0, 0, 0.2))"
                  h="4px"
                  pos="relative"
                  width="full"
                ></Box>
              </Flex>

              <FormControl w="70%">
                <InputGroup  mt="9">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdOutlineAlternateEmail color="gray" />}
                  />
                  <Input
                  isRequired
                    focusBorderColor="red.500"
                    _focus={{boxShadow: `0 0 0 2px rgba(255, 0, 0, .3)`}}
                    variant="outline"
                    border="none"
                    type="email"
                    placeholder="Seu email"
                    bgColor='gray.bgInput'
                    color="gray.600"
                    fontSize="sm"
                    fontWeight="300"
                    _placeholder={{ opacity: 0.8, color: 'gray' }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl w="70%">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    children={<CMdOutlineMarkEmailRead color="gray" />}
                  />
                  <Input
                  isRequired
                    focusBorderColor="red.500"
                    _focus={{boxShadow: `0 0 0 2px rgba(255, 0, 0, .3)`}}
                    variant="outline"
                    _placeholder={{ opacity: 0.8, color: 'gray' }}
                    border="none"
                    type="email"
                    fontSize="sm"
                    fontWeight="300"
                    bgColor='gray.bgInput'
                    placeholder="Confirme seu email"
                    mb="4"
                    color="gray.600"
                  />
                </InputGroup>
                <FormHelperText textAlign="right"></FormHelperText>
              </FormControl>

              <Button
                borderRadius="md"
                type="submit"
                variant="solid"
                color="white"
                colorScheme="red"
                bgColor="#fe0000"
                width="70%"
                fontSize="sm"
                fontWeight="600"
              
              >
                Recuperar
              </Button>
              <Flex alignItems="center" justify="center" >
                <CFaLock color="gray.500" mr="1" fontSize="8px" />
                <Text color="gray.500" fontSize="8px" textAlign="center">
                  Seus dados estão protegidos
                </Text>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
