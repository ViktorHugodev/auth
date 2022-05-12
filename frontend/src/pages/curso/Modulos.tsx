import {
  AspectRatio,
  Avatar,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import "video.js/dist/video-js.css";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome";
import VideoJS from "../../components/VideoJs/VideoJs";
import { apiTest } from "../../services/apiMovies";
import {
  AddList,
  Dislike,
  Done,
  IconNext,
  IconPrevius,
  Like,
  Messages,
} from "../../styles/components/Icon";
import { withSSRGuest } from "../../utils/withSSRGuest copy";

interface AulasProps {
  url_video: string;
  title: string;
  id: string;
  subtitle: string;
  description: string;
  url_thumb: string;
  host: string;
  slug: string;
  url_banner: string;
  order: number;
}
interface AulaDataProps {
  aulas: AulasProps[];
}

export default function Modulos({ aulas }: AulaDataProps) {
  const video = "1Yarv1dFoOU";
  const [isVimeo, setIsVimeo] = useState(false);
  const [isYouTube, setIsYouTube] = useState(false);
  const [isVideoJs, setIsVideoJs] = useState(false);
  const [classList, setClassList] = useState([]);
  const [currentClassIndex, setCurrentClassIndex] = useState(2);
  const hasPrevious = currentClassIndex > 0;
  const hasNext = currentClassIndex + 1 < aulas.length;
  const videoRef = useRef(null);

  function handleNextClass() {
    if (hasNext) setCurrentClassIndex(currentClassIndex + 1);
 
  }
  function handlePreviousClass() {
    if (hasPrevious) setCurrentClassIndex(currentClassIndex - 1);
  }

  function playList(aulas: AulasProps[], index: number) {
    setClassList(aulas);
    setCurrentClassIndex(index);
  }
  console.log(aulas);

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,

    fluid: true,
    sources: [
      {
        src: aulas[currentClassIndex].url_video,
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      player.log("player is waiting");
    });

    player.on("dispose", () => {
      player.log("player will dispose");
    });
    player.on('ended', () => {
      setCurrentClassIndex(currentClassIndex + 1);
    });
  };
  function RenderVideo() {
    if (aulas[currentClassIndex].host === "videojs") {
      return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
    } else if (aulas[currentClassIndex].host === "youtube") {
      
      return (

        // TODO:<iframe width="560" height="315" src="https://www.youtube.com/embed/cF3jDeUTtjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe
        ref={videoRef}
          onEnded={handleNextClass}
          allow="autoplay; encrypted-media; onended"
          id="ytplayer"
          title={aulas[currentClassIndex].title}
          src={`https://www.youtube.com/embed/${aulas[currentClassIndex]?.url_video}?autoplay=1&controls=1&ended=99`}
          width="100%"
          height="100%"
          picture-in-picture
          frameBorder="0"
          allowFullScreen
        ></iframe>
      );
    } else if (aulas[currentClassIndex].host === "vimeo") {
      return (
        <iframe
          allow="autoplay"
          onEnded={handleNextClass}
          title="Aula de Programação Orientada a Objetos em Kotlin do básico ao avançado"
          src={`https://player.vimeo.com/video/${aulas[currentClassIndex]?.url_video}?autoplay=1`}
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      );
    } else if (aulas[currentClassIndex].host === "text") {
      return <Text p="4">{aulas[currentClassIndex].slug}</Text>;
    }
  }
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
        <Flex
          w="100%"
          height="100%"
          mr="6"
          borderRadius="lg"
          overflow="hidden"
          align="center"
          justify="center"
          bg="black"
        >
          <AspectRatio
            ratio={16 / 9}
            bg="black"
            w="100%"
            maxW="1000px"
            boxShadow="lg"
            borderRadius="md"
          >
            {/* <Box w="100%" height="100%"> */}
            <RenderVideo />
            {/* </Box> */}
          </AspectRatio>
        </Flex>
        <Flex
          borderRadius="md"
          direction="column"
          bg="rgba(255, 255, 255, 0.05)"
          p="6"
          overflowY={"auto"}
          // h="100%"
          w="40%"
          // h="60vh"
        >
          <Flex direction="column" fontSize="sm" fontFamily="Poppins" mb="4">
            <Text>Nome do curso</Text>
            <Text fontSize="smaller">
              Desirae Boator - {aulas.length} vídeos
            </Text>
          </Flex>
          {aulas.map((aula, index) => {
            return (
              <Flex
                direction="row"
                my="4"
                key={aula.id}
                onClick={() => setCurrentClassIndex(index)}
                cursor="pointer"
                transition="all .3s ease"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                <Image
                  // minW="144px"
                  maxW="144px"
                  title={aula.title}
                  borderRadius="md"
                  src={aula.url_banner}
                  alt={aula.title}
                  objectFit="contain"
                />

                <Flex
                  direction="column"
                  p="2"
                  fontSize="smaller"
                  fontFamily="Poppins"
                  justify="center"
                >
                  <Text>Aula {aula.order}</Text>
                  <Text fontSize="smaller">{aula.title}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        px="10"
        w="70%"
        sx={{
          "button:hover": {
            borderColor: `blue.500`,
            color: "blue.500",
            bg: "transparent",
          },
        }}
      >
        <Flex direction="column" fontFamily="Poppins">
          <Text fontSize="smaller" color="green">
            Mais curtidos
          </Text>
          <Text my="2">{aulas[currentClassIndex].title}</Text>{" "}
          <div
            dangerouslySetInnerHTML={{
              __html: aulas[currentClassIndex].description,
            }}
          />
          {/* {aulas[currentClassIndex].description} */}
        </Flex>
        <Flex justify="space-between" mt="4">
          <Stack direction="row" spacing={4} opacity="0.6">
            <IconButton
              isDisabled={!hasPrevious}
              onClick={handlePreviousClass}
              aria-label="Previus video"
              icon={<IconPrevius />}
              variant="outline"
            />

            <Button leftIcon={<Done />} variant="outline">
              Concluido
            </Button>
            <IconButton
              isDisabled={!hasNext}
              onClick={handleNextClass}
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
            {/* <ModalAuthor /> */}
          </Flex>
        </Flex>
        <Divider mt="6" opacity="0.2" />

        <Flex fontFamily="Poppins">
          <Flex p="4">
            <Messages mr="2" />
            <Text>Comentários</Text>
          </Flex>
        </Flex>
        <Flex w="100%">
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
            <IconButton
              icon={<RiSendPlaneLine />}
              aria-label="send coment"
              bg="blue.500"
              _hover={{ bg: "transparent" }}
            />
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

export const getServerSideProps = withSSRGuest(async () => {
  const response = await apiTest.get("");
  console.log(response);
  return {
    props: {
      aulas: response.data,
    },
  };
});
