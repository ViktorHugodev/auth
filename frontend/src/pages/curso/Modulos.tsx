import {
  AspectRatio,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  IconButton,
  Avatar,
  Divider,
  Icon,
  Textarea,
  Box,
  Image,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome";
import { ModalAuthor } from "../../components/ModalAuthor/ModalAuthor";
import { getVideosFromDb } from "../../services/firebase/getVideosFromDb";
import {
  IconNext,
  IconPrevius,
  Done,
  AddList,
  Dislike,
  Like,
  Messages,
} from "../../styles/components/Icon";
import {RiSendPlaneLine} from 'react-icons/ri'
export default function Modulos() {
  const [resize, setResize] = useState("horizontal");
  return (
    <LayoutHome>
      <Flex
        justify="space-between"
        m="10"
        mt="20"
        h="60vh"
        
        sx={{
          p: {
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            textOverflow: "ellipsis",
            overflow: "hidden",
          },
          
        }}
      >
        <Box w="100%" height="100%" mr="6" borderRadius="lg" overflow="hidden">
          <AspectRatio w="100%" h="100%" boxShadow="lg" borderRadius="md">
            <iframe
              title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
              src={`https://www.youtube.com/embed/iNCJfI48cKQ`}
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </Box>
        <Flex
        
          borderRadius="md"
          direction="column"
          bg="rgba(255, 255, 255, 0.05)"
          p="6"
          overflowY={"auto"}
          h="100%"
          w="40%"
        >
          <Flex direction="column" fontSize="sm" fontFamily="Poppins" mb="4">
            <Text>Nome do curso</Text>
            <Text fontSize="smaller">Desirae Boator - 11 vídeos</Text>
          </Flex>
          <Flex direction="row" my="4">
            <Image
              minW="144px"
              title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
              borderRadius="md"
              src="https://i.ytimg.com/vi/MLDH_t3Rpms/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkugLsgmGvBNCbbHX4aBg77cQ38w"
              alt="thumb"
              objectFit="contain"
            />

            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit praesentium facere autem dolorem, officia eveniet
                odit ea necessitatibus, repellat quia explicabo nemo nihil! At
                eveniet consequuntur dolorum dolorem perspiciatis!
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row">
            <Image
              minW="144px"
              title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
              src="https://i.ytimg.com/vi/9VGLELoY6fs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBZvOW7IzchpR2NMhb6XzcujmOhg"
              borderRadius="md"
              alt="thumb"
              objectFit="contain"
            />

            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit praesentium facere autem dolorem, officia eveniet
                odit ea necessitatibus, repellat quia explicabo nemo nihil! At
                eveniet consequuntur dolorum dolorem perspiciatis!
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" align="center" my="4">
            <Image
              borderRadius="md"
              minW="144px"
              title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
              src="https://i.ytimg.com/vi/ge31HzWk5T8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgT3FBozo9DTA7ut3yLub7eq3E5g"
              alt="thumb"
              objectFit="contain"
            />

            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit praesentium facere autem dolorem, officia eveniet
                odit ea necessitatibus, repellat quia explicabo nemo nihil! At
                eveniet consequuntur dolorum dolorem perspiciatis!
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" align="center" my="4">
            <Image
              borderRadius="md"
              minW="144px"
              title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
              src="https://i.ytimg.com/vi/ge31HzWk5T8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgT3FBozo9DTA7ut3yLub7eq3E5g"
              alt="thumb"
              objectFit="contain"
            />

            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit praesentium facere autem dolorem, officia eveniet
                odit ea necessitatibus, repellat quia explicabo nemo nihil! At
                eveniet consequuntur dolorum dolorem perspiciatis!
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row" align="center" my="4">
            <Image
              borderRadius="md"
              minW="144px"
              title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
              src="https://i.ytimg.com/vi/ge31HzWk5T8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgT3FBozo9DTA7ut3yLub7eq3E5g"
              alt="thumb"
              objectFit="contain"
            />

            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit praesentium facere autem dolorem, officia eveniet
                odit ea necessitatibus, repellat quia explicabo nemo nihil! At
                eveniet consequuntur dolorum dolorem perspiciatis!
              </Text>
            </Flex>
          </Flex>
          <Flex direction="row">
            <Image
              minW="144px"
              title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
              src="https://i.ytimg.com/vi/8nXqcugV2Y4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDznXZGjL03YqamNKFCRDAzYbJrOw"
              borderRadius="md"
              alt="thumb"
              objectFit="contain"
            />

            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid velit praesentium facere autem dolorem, officia eveniet
                odit ea necessitatibus, repellat quia explicabo nemo nihil! At
                eveniet consequuntur dolorum dolorem perspiciatis!
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" px="10" w="70%">
        <Flex direction="column" fontFamily="Poppins">
          <Text fontSize="smaller" color="green">
            Mais curtidos
          </Text>
          <Text my="2">Como adicionar e gerenciar um aluno manualmente</Text>{" "}
          <Text fontSize="smaller" fontWeight="400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            velit praesentium facere autem dolorem, officia eveniet odit ea
            necessitatibus, repellat quia explicabo nemo nihil! At eveniet
            consequuntur dolorum dolorem perspiciatis!
          </Text>
        </Flex>
        <Flex justify="space-between" mt="4">
          <Stack direction="row" spacing={4} opacity="0.6">
            <IconButton
              aria-label="Previus video"
              icon={<IconPrevius />}
              variant="outline"
            />

            <Button leftIcon={<Done />} variant="outline">
              Concluido
            </Button>
            <IconButton
              aria-label="next video"
              icon={<IconNext />}
              variant="outline"
            />
          </Stack>
          <Stack direction="row" spacing={4} opacity="0.6">
            <IconButton
              aria-label="Previus video"
              icon={<AddList />}
              variant="outline"
            />
            <IconButton
              aria-label="Previus video"
              icon={<Like />}
              variant="outline"
            />

            <IconButton
              aria-label="next video"
              icon={<Dislike />}
              variant="outline"
            />
          </Stack>
        </Flex>
        <Flex
          align="center"
          fontSize="md"
          fontFamily="Poppins"
          fontWeight="700"
          mt="6"
        >
          <Avatar name="Victor Hugo" size="md" boxShadow="md" />
          <Flex justify="flex-start" direction="column" ml="4" align="center">
            <Text mt="2">Victor Hugo</Text>
            <ModalAuthor />
          </Flex>
        </Flex>
        <Divider mt="6" opacity="0.2" />

        <Flex fontFamily="Poppins">
          <Flex p="4">
            <Messages mr="2" />
            <Text>Comentários</Text>
          </Flex>
        </Flex>
        <Flex w="100%" >
          <Avatar name="Victor Hugo" size="md" boxShadow="md" />
          <Textarea
            // border="0"
            opacity="0.4"
            size="sm"
           minH={50}
            ml="4"
            placeholder="Escreva seu comentário"
            borderRadius="lg"
          />
          <Flex align="center" ml="2">

        
          <IconButton icon={<RiSendPlaneLine />}aria-label="send coment" bg="blue.500" _hover={{bg: 'transparent'}}/>
          </Flex>
        </Flex>
        <Flex fontFamily="Poppins" mt="4" align="center">
          <Avatar name="Victor Hugo" size="md" boxShadow="md" />
          <Flex direction="column" p="4">
            <Text fontSize="md" fontWeight="600">
              Desire autor
            </Text>
            <Text fontSize="smaller" fontWeight="400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              velit praesentium facere autem dolorem, officia eveniet odit ea
              necessitatibus, repellat quia explicabo nemo nihil! At eveniet
              consequuntur dolorum dolorem perspiciatis!
            </Text>
          </Flex>
        </Flex>
        <Flex fontFamily="Poppins" mt="4" align="center">
          <Avatar name="Victor Hugo" size="md" boxShadow="md" />
          <Flex direction="column" p="4">
            <Text fontSize="md" fontWeight="600">
              Desire autor
            </Text>
            <Text fontSize="smaller" fontWeight="400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              velit praesentium facere autem dolorem, officia eveniet odit ea
              necessitatibus, repellat quia explicabo nemo nihil! At eveniet
              consequuntur dolorum dolorem perspiciatis!
            </Text>
          </Flex>
        </Flex>
        <Flex fontFamily="Poppins" mt="4" align="center">
          <Avatar name="Victor Hugo" size="md" boxShadow="md" />
          <Flex direction="column" p="4">
            <Text fontSize="md" fontWeight="600">
              Desire autor
            </Text>
            <Text fontSize="smaller" fontWeight="400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              velit praesentium facere autem dolorem, officia eveniet odit ea
              necessitatibus, repellat quia explicabo nemo nihil! At eveniet
              consequuntur dolorum dolorem perspiciatis!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </LayoutHome>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getVideosFromDb();
  return {
    props: {
      videos: data,
    },
  };
};
