/* eslint-disable react/no-children-prop */
import Head from "next/head";
import { parseCookies } from "nookies";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest copy";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaLock, FaRegUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
const CAiOutlineEye = chakra(FaEyeSlash);
const CAiOutlineEyeInvisible = chakra(FaEye);
const CFaRegUserCircle = chakra(FaRegUserCircle);
const CFaLock = chakra(FaLock);

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };
    await signIn(data);
  }
  function handleShowClick() {
    setShowPassword(!showPassword);
  }

  return (
    <Flex
      p="2"
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundImage={[`/images/bg-kratos2.jpg`, `/images/bg-kratos4.jpg`]}
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
          <form onSubmit={handleSubmit}>
            <Stack
              borderRadius="xl"
              height="25rem"
              spacing={4}
              backgroundColor="#000000"
              boxShadow="md"
              alignItems="center"
            >
              <Flex
                width="full"
                align="center"
                direction="column"
                height="7rem"
                justify="space-around"
              >
                <Heading
                  textAlign="center"
                  fontSize="xl"
                  color="white"
                  mt="1rem"
                  fontWeight="nroaml"
                >
                  BEM VINDO AO OLYMPIAKUS
                </Heading>
                <Box
                  bgGradient="linear(to-r, rgba(255, 0, 0, 1), rgba(0, 0, 0, 0.2))"
                  h="4px"
                  pos="relative"
                  borderColor="gray.200"
                  width="full"
                ></Box>
              </Flex>

              <FormControl w="70%">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaRegUserCircle color="gray.600" />}
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    focusBorderColor="red.500"
                    variant="outline"
                    border="none"
                    
                    // bgColor="gray.800"

                    type="email"
                    placeholder="Seu email"
                    color="gray.600"
                    _placeholder={{ opacity: 0.8, color: "gray.600" }}
                    // borderColor="red.500"
                  />
                </InputGroup>
              </FormControl>
              <FormControl w="70%">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    children={<CFaLock color="gray.600" />}
                  />
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    focusBorderColor="red.500"
                    variant="flushed"
                    _placeholder={{ opacity: 0.8, color: "gray.600" }}
                    color="gray.600"
                    // focusBorderColor="red.500"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    border="none"
                  />
                  <InputRightElement width="4.5rem">
                    {password.length >= 1 && (
                      <Button
                        h="1.75rem"
                        size="sm"
                        variant="none"
                        color="gray.500"
                        onClick={handleShowClick}
                      >
                        {showPassword ? (
                          <CAiOutlineEye color="gray.600" />
                        ) : (
                          <CAiOutlineEyeInvisible color="gray.600" />
                        )}
                      </Button>
                    )}
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link href="/ResetPassword">Esqueci minha senha</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius="md"
                type="submit"
                variant="solid"
                color="white"
                colorScheme="red"
                bgColor="#fe0000"
                width="70%"
              >
                Entrar
              </Button>
              <Flex alignItems="center" justify="center">
                <CFaLock color="gray.500" mr="2" fontSize=".75rem" />
                <Text color="gray.500" fontSize=".75rem" textAlign="center">
                  Seus dados estão protegidos
                </Text>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(
  //High order function, chama a função com o parametro de ssr
  async (ctx) => {
    return {
      props: {},
    };
  }
);
