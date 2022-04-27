import {
  Avatar,
  Button,
  Flex,
  Text,
  HStack,
  VStack,
  chakra,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";

export function DadosPessoais() {
  return (
    <Flex direction="column" minW="100%">
      <Flex fontFamily="Poppins" align="center" border="1px solid red">
        <Avatar name="Victor Hugo" size="2xl" />
        <Flex ml="4" direction="column">
          <Text>Foto do perfil</Text>
          <Button
            fontSize="smaller"
            size="lg"
            mt="2"
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
        <HStack border="1px solid red" align="flex-start">
          <VStack w="50%" align="flex-start" spacing={2}>
            <FormLabel>Nome</FormLabel>
            <Input
              border="none"
              // _focus={{ boxShadow: `0 0 0 2px rgba(255, 0, 0, .3)` }}
              focusBorderColor="blue.500"
              variant="outline"
              bgColor="gray.dash"
              placeholder="Nome completo"
              w="100%"
            />
            <FormLabel>CPF</FormLabel>
            <Input placeholder="Nome completo" />
            <FormLabel>Celular</FormLabel>
            <Input placeholder="Nome completo" />
          </VStack>
          <VStack w="50%" align="flex-start" spacing={2}>
            <FormLabel>Sobrenome</FormLabel>
            <Input placeholder="Nome completo" />
            <FormLabel>Gênero</FormLabel>
            <Input placeholder="Nome completo" />
            <FormLabel>E-mail</FormLabel>
            <Input placeholder="Nome completo" />
          </VStack>
        </HStack>
      </chakra.form>
    </Flex>
  );
}
