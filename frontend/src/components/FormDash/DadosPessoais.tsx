import {
  Avatar,
  Button,
  Flex,
  Text,
  HStack,
  VStack,
  chakra,
  FormLabel,

  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { ModalChangePassword } from "../Modals/ModalChangePassword";

export function DadosPessoais() {
  const [cpf, setCpf] = useState("");

  function formatCPF(cpf) {
    if (cpf.length === 11) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }
    return cpf;
  }
  return (
    <Flex direction="column" minW="100%" py="6">
      <Flex  align="center">
        <Avatar name="Victor Hugo" size="2xl" />
        <Flex ml="4" direction="column">
          <Text>Foto de perfil</Text>
          <Button
            mt="4"
            fontSize="smaller"
            size="lg"
            // mt="2"
            height="40px"
            w="235px"
            variant="ghost"
            _hover={{
              bg: "red.dash",
            }}
            bg={"gray.dash"}
          >
            Atualizar foto do perfil
          </Button>
        </Flex>
      </Flex>
      <chakra.form>
        <HStack align="flex-start" fontSize="smaller" >
          <VStack w="50%" align="flex-start" spacing={4} justify="center">
            <Box w="100%" >
              <FormLabel mt="4">Nome</FormLabel>
              <Input
                type="text"
                border="none"
                focusBorderColor="blue.500"
                variant="outline"
                bgColor="gray.dash"
                placeholder="Primeiro nome"
                w="100%"
              />
            </Box>
            <Box w="100%">
              <FormLabel m="0">CPF</FormLabel>
              <Input
                placeholder="Ex. 12345678910 just numbers."
                border="none"
                // pattern="[0-9]{11}"
                type="text"
                value={formatCPF(cpf)}
                onChange={(e) => setCpf(e.target.value)}
                focusBorderColor="blue.500"
                variant="outline"
                bgColor="gray.dash"
                w="100%"
              />
            </Box>
            <Box w="100%">
              <FormLabel m="0">Celular</FormLabel>
              <Input
                border="none"
                type="number"
                focusBorderColor="blue.500"
                variant="outline"
                bgColor="gray.dash"
                w="100%"
                placeholder="ex (38)99123 4567"
              />
            </Box>
          </VStack>
          <VStack w="50%" align="flex-start" spacing={4}>
            <Box w="100%">
              <FormLabel mt="4">Sobrenome</FormLabel>
              <Input
                type="text"
                border="none"
                focusBorderColor="blue.500"
                variant="outline"
                bgColor="gray.dash"
                placeholder="Último nome"
                w="100%"
              />
            </Box>
            <Box w="100%">
              <FormLabel m="0">Gênero</FormLabel>
              <Input
                type="text"
                border="none"
                focusBorderColor="blue.500"
                variant="outline"
                bgColor="gray.dash"
                placeholder="Nome completo"
                w="100%"
              />
            </Box>
            <Box w="100%">
              <FormLabel m="0">E-mail</FormLabel>
              <Input
                type="email"
                border="none"
                focusBorderColor="blue.500"
                variant="outline"
                bgColor="gray.dash"
                placeholder="Ex. yourname@provider.com"
                w="100%"
              />
            </Box>
          </VStack>
        </HStack>
        <Flex  direction="column" mt="8">
          <Text mb="2">Senha</Text>

          <ModalChangePassword/>
        </Flex> 
      </chakra.form>
    </Flex>
  );
}
