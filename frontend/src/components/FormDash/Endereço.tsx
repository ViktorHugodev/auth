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
import { FormEvent, useState } from "react";
import { ModalChangePassword } from "../Modals/ModalChangePassword";

export function Enderecos() {
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [number, setNumber] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [pais, setPais] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(endereco);
    const addressInformation = {
      endereco,
      cep,
      rua,
      number,
      cidade,
      estado,
      complemento,
      bairro,
      pais,
    };
    console.log(addressInformation);
  }

  function formatCep(cep) {
    return cep.replace(/\D/g, "");
  }
  return (
    <chakra.form onSubmit={handleSubmit} _placeholder={{ opacity: 0.2, color: "white" }}>
      <HStack align="flex-start" fontSize="smaller">
        <VStack w="50%" align="flex-start" spacing={4} justify="center" >
          <Box w="100%" _placeholder={{ opacity: 0.2, color: "white" }}>
            <FormLabel mt="4">Nome do endereço</FormLabel>
            <Input
              isRequired
              type="text"
              border="none"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              placeholder="Ex. Casa ou trabalho"
              w="100%"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Box>
          <Box w="100%">
            <FormLabel m="0">CEP</FormLabel>
            <Input
              isRequired
              placeholder="Ex. 39400000 just numbers."
              border="none"
              pattern=""
              value={formatCep(cep)}
              onChange={(e) => setCep(e.target.value)}
              type="text"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              w="100%"
            />
          </Box>
          <Box w="100%">
            <FormLabel m="0">Rua/Avenida</FormLabel>
            <Input
              isRequired
              border="none"
              type="text"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              w="100%"
              placeholder="ex Avenida Paulista"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
          </Box>
          <Box w="100%">
            <FormLabel m="0">Número</FormLabel>
            <Input
              isRequired
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              border="none"
              type="text"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              w="100%"
              placeholder="ex (38)99123 4567"
            />
          </Box>
          <Box w="100%">
            <FormLabel m="0">Complemento</FormLabel>
            <Input
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              border="none"
              type="text"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              w="100%"
              placeholder="ex Ap 204, condominio"
            />
          </Box>
        </VStack>
        <VStack w="50%" align="flex-start" spacing={4}>
          <Box w="100%">
            <FormLabel mt="4">Bairro</FormLabel>
            <Input
              isRequired
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              type="text"
              border="none"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              placeholder="Ex. Centro"
              w="100%"
            />
          </Box>
          <Box w="100%">
            <FormLabel m="0">Cidade</FormLabel>
            <Input
              isRequired
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              type="text"
              border="none"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              placeholder="São Paulo"
              w="100%"
            />
          </Box>
          <Box w="100%">
            <FormLabel m="0">Estado - UF</FormLabel>
            <Input
              isRequired
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              type="text"
              border="none"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              placeholder="Ex. São Paulo"
              w="100%"
            />
          </Box>
          <Box w="100%">
            <FormLabel m="0">País</FormLabel>
            <Input
              isRequired
              value={pais}
              onChange={(e) => setPais(e.target.value)}
              type="text"
              border="none"
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              placeholder="Ex. Brasil"
              w="100%"
            />
          </Box>
        </VStack>
      </HStack>
      <Flex direction="column" mt="8">
        <Button
          _hover={{
            bg: "red.main",
          }}
          fontSize="smaller"
          width="166px"
          fontFamily="Poppins"
          fontWeight="600"
          variant="ghost"
          type="submit"
          height="40px"
          bg={"red.dash"}
        >
          Atualizar
        </Button>
      </Flex>
    </chakra.form>
  );
}
