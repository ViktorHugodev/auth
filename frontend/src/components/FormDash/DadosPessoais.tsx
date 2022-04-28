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
  Select,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { ModalChangePassword } from "../Modals/ModalChangePassword";

export function DadosPessoais() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [genero, setGenero] = useState("");
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState("");

  function formatCPF(cpf) {
    if (cpf.length === 11) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }
    return cpf;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const dadosPessoas = {
      cpf,
      nome,
      sobrenome,
      genero,
      celular,
      email,
    };
  }
  console.log(genero)
  return (
    <Flex direction="column" minW="100%" py="6">
      <Flex align="center">
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
      <chakra.form onSubmit={handleSubmit}>
        <HStack align="flex-start" fontSize="smaller">
          <VStack w="50%" align="flex-start" spacing={4} justify="center">
            <Box w="100%">
              <FormLabel mt="4">Nome</FormLabel>
              <Input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
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
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
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
              <Select
                isRequired
                bg="black"
                placeholder="Selecione o gênero"
                bgColor="gray.dash"
                border="none"
                colorScheme="black"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              >
                <option  value="masculino">Masculino</option>
                <option value="femino">Feminino</option>
                <option value="outro">Outro</option>
              </Select>
            </Box>
            <Box w="100%">
              <FormLabel m="0">E-mail</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
        <Flex direction="column" mt="8">
          <Text mb="2">Senha</Text>

          <ModalChangePassword />
        </Flex>
      </chakra.form>
    </Flex>
  );
}
