import {
  AspectRatio,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome";
import { getVideosFromDb } from "../../services/firebase/getVideosFromDb";
import {
  IconNext,
  IconPrevius,
  Done,
  AddList,
  Dislike,
  Like,
} from "../../styles/components/Icon";
export default function Modulos() {
  return (
    <LayoutHome>
      <Flex justify="space-between" m="10" mt="20" h="60vh">

        <AspectRatio minW="480px" w="60%" boxShadow="lg">
          <iframe
            title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
            src={`https://www.youtube.com/embed/iNCJfI48cKQ`}
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <Flex

         borderRadius="md"
          direction="column"
          bg="rgba(255, 255, 255, 0.05)"
          p="6"
          overflowY={"auto"}
          h="100%"
        >
          <Flex direction="column" fontSize="sm" fontFamily="Poppins" my="2">
            <Text>Nome do curso</Text>
            <Text fontSize="smaller">Desirae Boator - 11 vídeos</Text>
          </Flex>
          <Flex direction="row" my="2">
            <AspectRatio minW="144px">
              <iframe
                title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
                src={`https://www.youtube.com/embed/iNCJfI48cKQ`}
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>Título da aula aqui, blablabla</Text>
            </Flex>
          </Flex>
          <Flex direction="row" my="2">
            <AspectRatio minW="144px">
              <iframe
                title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
                src={`https://www.youtube.com/embed/f02mOEt11OQ`}
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>Título da aula aqui, blablabla</Text>
            </Flex>
          </Flex>
          <Flex direction="row" my="2">
            <AspectRatio minW="144px">
              <iframe
                title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
                src={`https://www.youtube.com/embed/wgNSecI69XQ`}
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>Título da aula aqui, blablabla</Text>
            </Flex>
          </Flex>
          <Flex direction="row"  my="2">
            <AspectRatio minW="144px">
              <iframe
                title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
                src={`https://www.youtube.com/embed/iNCJfI48cKQ`}
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>Título da aula aqui, blablabla</Text>
            </Flex>
          </Flex>
          <Flex direction="row"  my="2">
            <AspectRatio minW="144px">
              <iframe
                title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
                src={`https://www.youtube.com/embed/iNCJfI48cKQ`}
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>Título da aula aqui, blablabla</Text>
            </Flex>
          </Flex>
          <Flex direction="row" my="2">
            <AspectRatio minW="144px">
              <iframe
                title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
                src={`https://www.youtube.com/embed/iNCJfI48cKQ`}
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>Título da aula aqui, blablabla</Text>
            </Flex>
          </Flex>
          <Flex direction="row" >
            <AspectRatio minW="144px">
              <iframe
                title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
                src={`https://www.youtube.com/embed/iNCJfI48cKQ`}
                allowFullScreen
              ></iframe>
            </AspectRatio>
            <Flex
              direction="column"
              p="2"
              fontSize="smaller"
              fontFamily="Poppins"
              justify="center"
            >
              <Text>Aula 03</Text>
              <Text>Título da aula aqui, blablabla</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" px="10">
        <Flex direction="column" fontFamily="Poppins">
          <Text fontSize="smaller" color="green">
            Mais curtidos
          </Text>
          <Text mt="2">Como adicionar e gerenciar um aluno manualmente</Text>
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
