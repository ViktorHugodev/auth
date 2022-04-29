import {
  Avatar,
  Button,
  Flex,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { AbrirTicket } from "../Buttons/AbrirTicket";
import { PerfilDashboard } from "../Perfil/PerfilDashboard";

export function MeusChamados() {
  const data = [
    { data: "02/02/1994", valor: "24,05", nome: "Problemas conexão", mensagem: 'Testando msg' },
    { data: "04/08/2021", valor: "12,99", nome: "internet travando", mensagem: 'Testando asoihdoidiashd' },
    { data: "04/08/2021", valor: "128,74", nome: "instabilidade rede", mensagem: 'aspojdiosdjopas msg' },
    { data: "04/08/2021", valor: "08,70", nome: "outro problemas conexão", mensagem: 'testtststst msg' },
  ];
  return (
    <Flex direction="column">
      <PerfilDashboard/>
      <Flex justify="space-between" align="center" my="6">
        <Heading fontWeight="400" fontSize="2xl">
          Seus Tickets
        </Heading>
        <Button
          h="50px"
          borderRadius="lg"
          width="182px"
          variant="ghost"
          bg="red.dash"
        >
          Novo ticket
        </Button>
      </Flex>
      <TableContainer>
        <Table variant="simple" bg="gray.dash" borderRadius="lg" size={"md"} my="6" >
          <Thead>
            <Tr>
              <Th>Nome do ticket</Th>
              <Th textAlign="center">Data</Th>
              <Th textAlign="end">Ação</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>{item.nome}</Td>
                  <Td textAlign="center">{item.data}</Td>
                  <Td textAlign="end">
                    <AbrirTicket message={item.mensagem} />
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
      </TableContainer>
    </Flex>
  );
}
