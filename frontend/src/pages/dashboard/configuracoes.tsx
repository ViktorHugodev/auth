import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
} from "@chakra-ui/react";
import { DadosPessoais } from "../../components/FormDash/DadosPessoais";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome";

export default function Configuracoes() {
  return (
    <LayoutHome>
      <Flex
        position="relative"
        align="center"
        top="calc(80px)"
        height="600px"
        w="100%"
        p="10"
      >
        <Tabs
          defaultIndex={1}
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
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </LayoutHome>
  );
}
