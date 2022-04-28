import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Assinaturas } from "../../components/FormDash/Assinaturas";
import { DadosPessoais } from "../../components/FormDash/DadosPessoais";
import { Enderecos } from "../../components/FormDash/Endereço";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome";

export default function Configuracoes() {
  return (
    <LayoutHome>
      <Flex
        position="relative"
        align="center"
        top="calc(80px)"
 
        w="100%"
        p="10"
      >
        <Tabs
          defaultIndex={0}
          borderBottomColor="transparent"
          h="100%"
          w="100%"
          zIndex="5"
        >
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Dados pessoais
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Endereço
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Assinatura
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Meus chamados
            </Tab>

            <Tab isDisabled py={4} m={0}>
              Certificados
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <DadosPessoais/>
            </TabPanel>
            <TabPanel>
            <Enderecos/>
            </TabPanel>
            <TabPanel>
            <Assinaturas/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </LayoutHome>
  );
}
