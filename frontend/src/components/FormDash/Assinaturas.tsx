import {
  Avatar,
  Flex,
  Text,
  Button,
  Heading,
  Box,
  Tfoot,
  Td,
  Tr,
  Thead,
  Tbody,
  Th,
  useColorModeValue,
  Table,
} from "@chakra-ui/react";
import React from "react";
import { MasterCard } from "../../styles/components/Icon";
import { PerfilDashboard } from "../Perfil/PerfilDashboard";

export function Assinaturas() {
  const data = [
    { name: "02/02/1994", email: "24,05" },
    { name: "04/08/2021", email: "12,99" },
    { name: "04/08/2021", email: "128,74" },
    { name: "04/08/2021", email: "08,70" },
  ];

  return (
    <Flex w="100%" direction="column">
      <Flex w="100%" align="center" justify="flex-start" >
       <PerfilDashboard/>

     
      </Flex>
      <Flex my="6">
      <Box >
        <Heading fontWeight="400">Status</Heading>
        <Text fontSize="smaller" color="green">
          Assinatura ativa
        </Text>
      </Box>
      <Flex direction="column" ml="auto">
          <Button color="white" borderColor="red" variant="outline">
            Solicitar reembolso
          </Button>
        </Flex>
      </Flex>

      <Flex justify="space-between" my="6">
        <Flex align="center" w="50%" justify="space-between" direction="column">
          <Flex justify="space-between" w="100%">
            <Text>Forma de pagamento</Text>
            <Button
              variant="none"
              textDecoration="underline"
              fontSize="smaller"
              color="red.dash"
            >
              Alterar
            </Button>
          </Flex>
          <Flex
            borderRadius="xl"
            w="100%"
            height="60px"
            bg="gray.dash"
            align="center"
          >
            <MasterCard fontSize="32px" mx="4" />
            <Text alignSelf={"center"}>Mastercard **** **** **** 1234</Text>
          </Flex>
        </Flex>

        <Flex direction="column">
          <Text>Proxíma cobrança: 04/04/22</Text>
          <Text textAlign="end" fontSize="3xl">
            R$ 24,00
          </Text>
        </Flex>
      </Flex>

      <Flex
        my="6"
        w="full"
        bg="gray.600"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        borderRadius="lg"
      >
        <Table
          variant="simple"
          w="full"
          color="gray.200"
          bg={useColorModeValue("gray.dash", "gray.800")}
          display={{
            base: "block",
            md: "table",
          }}
          sx={{
            "@media print": {
              display: "table",
            },
          }}
        >
          <Thead
            display={{
              base: "none",
              md: "table-header-group",
            }}
            sx={{
              "@media print": {
                display: "table-header-group",
              },
            }}
          >
            <Tr>
              <Th color="gray.400">Data</Th>
              <Th color="gray.400" textAlign={"center"}>
                Valor
              </Th>
              <Th color="gray.400" textAlign={"right"}>
                Pago com
              </Th>
            </Tr>
          </Thead>
          <Tbody
            display={{
              base: "block",
              lg: "table-row-group",
              md: "table-row-group",
            }}
            sx={{
              "@media print": {
                display: "table-row-group",
              },
            }}
          >
            {data.map((token, tid) => {
              return (
                <Tr
                  key={tid}
                  display={{
                    base: "grid",
                    md: "table-row",
                  }}
                  sx={{
                    "@media print": {
                      display: "table-row",
                    },
                    gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                    gridGap: "10px",
                  }}
                >
                  <Td
                    display={{
                      base: "table-cell",
                      md: "none",
                    }}
                  >
                    Data
                  </Td>
                  <Td color={"gray.100"} fontSize="md" fontWeight="hairline">
                    {token.name}
                  </Td>

                  <Td
                    display={{
                      base: "table-cell",
                      md: "none",
                    }}
                    sx={{
                      "@media print": {
                        display: "none",
                      },
                    }}
                  >
                    {token.email}
                  </Td>
                  <Td textAlign={{ md: "center", sm: "start" }}>
                    {" "}
                    {token.email}
                  </Td>
                  <Td
                    display={{
                      base: "table-cell",
                      md: "none",
                    }}
                    sx={{
                      "@media print": {
                        display: "none",
                      },
                    }}
                  >
                    {token.email}
                  </Td>
                  <Td textAlign={{ md: "end", sm: "start" }}>
          
                 <Text>Mastercard **** **** **** 1234</Text>

   
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </Flex>
    </Flex>
  );
}
