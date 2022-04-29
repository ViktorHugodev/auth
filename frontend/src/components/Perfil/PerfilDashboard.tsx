import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

export function PerfilDashboard() {
  return (
    <Flex align="center" my="6">
      <Avatar name="Victor Hugo" size="2xl" />
      <Flex ml="4" direction="column">
    
        <Text fontSize="lg">Gabriel de araújo franco</Text>
        <Text fontSize="smaller">deverasart@gmail.com</Text>
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
  );
}
