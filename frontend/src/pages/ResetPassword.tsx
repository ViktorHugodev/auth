/* eslint-disable react/no-children-prop */
import { useState } from "react";
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
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {
  MdOutlineAlternateEmail,
  MdOutlineMarkEmailRead,
} from "react-icons/md";
const CMdOutlineAlternateEmail = chakra(MdOutlineAlternateEmail);
const CMdOutlineMarkEmailRead = chakra(MdOutlineMarkEmailRead);

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const handleShowClick = () => setShowPassword(!showPassword);
  //Colocar um before acima do login
  return (
    <Flex
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
        <Avatar bg="teal.500" size="xl" src={`/images/logo.jpg`} mb="1rem" />

        <Box minW={{ base: "20rem", sm: "25rem" }}>
          <form>
            <Stack
              position="relative"
              borderRadius="xl"
              height="25rem"
              spacing={4}
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
                  fontSize="xl"
                  color="white"
                  mt="1rem"
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
                <InputGroup mt="4">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CMdOutlineAlternateEmail color="gray.600" />}
                  />
                  <Input
                    focusBorderColor="red.500"
                    variant="flushed"
                    border="none"
                    type="email"
                    placeholder="Seu email"
                  />
                </InputGroup>
              </FormControl>
              <FormControl w="70%">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    children={<CMdOutlineMarkEmailRead color="gray.600" />}
                  />
                  <Input
                    focusBorderColor="red.500"
                    variant="flushed"
                    border="none"
                    type="email"
                    placeholder="Confirme seu email"
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
              >
                Recuperar
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
