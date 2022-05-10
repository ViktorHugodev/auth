import { Avatar, Button, Flex, Input, Text } from "@chakra-ui/react";

export function PerfilDashboard() {
  return (
    <Flex align="center" my="6">
      <Avatar name="Gabriel de araújo franco" size="2xl" />
      <Flex ml="4" direction="column">
        <Text fontSize="lg">Gabriel de araújo franco</Text>
        <Text fontSize="smaller">deverasart@gmail.com</Text>
    <Input
    type="file"
    />
        <Button
          mt="4"
          fontSize="smaller"
          size="lg"
          height="40px"
          w="235px"
          variant="ghost"
          _hover={{
            bg: "red.dash",
          }}
          bg={"gray.dash"}
        
        >
         
       
        </Button>
      </Flex>
    </Flex>
  );
}
