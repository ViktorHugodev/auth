import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  Textarea
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiLock } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import "video.js/dist/video-js.css";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome";
import { VideoMp4 } from "../../components/PlayerVideo/VideoMp4";
import { VimeoJs } from "../../components/PlayerVideo/Vimeo";
import { YouTubePlayer } from "../../components/PlayerVideo/YouTubeVideo";
import { apiTest } from "../../services/apiMovies";
import {
  AddList,
  Dislike,
  Done,
  IconNext,
  IconPrevius,
  Like,
  Messages
} from "../../styles/components/Icon";
import { withSSRGuest } from "../../utils/withSSRGuest copy";


export interface AulasProps {
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
  status: string;
  wait_days: number;
  published: string;
  blocked: string;
  release_date: string | null;
}

interface UserProps {
  class_id: string;
  time: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}
interface AulaDataProps {
  aulas: AulasProps[];
  users: UserProps;
}

export default function Modulos({ aulas, users }: AulaDataProps) {
  console.log("aulas:", aulas);
  console.log("user:", users);

  const [currentClassIndex, setCurrentClassIndex] = useState(3);
  const [showRenderVideo, setShowRenderVideo] = useState(false);
  const [isClassBlocked, setIsClassBlocked] = useState<boolean>(false);
  const hasPrevious = currentClassIndex > 0;
  const hasNext = currentClassIndex + 1 < aulas.length;
  //DATAS
  const release_at = "2022-02-29T18:52:43.000000Z";
  const releaseAt = new Date(release_at).toLocaleDateString();
  const dataAtual = new Date().toLocaleDateString();
  console.log("relasedAt", releaseAt);
  console.log("dataAtual", dataAtual);
  function handleNextClass() {
    if (hasNext) setCurrentClassIndex(currentClassIndex + 1);
  }
  function handlePreviousClass() {
    if (hasPrevious) setCurrentClassIndex(currentClassIndex - 1);
  }

  useEffect(() => {
    setShowRenderVideo(true);
  }, []);
  function handlePlayClass() {
    if (
      aulas[currentClassIndex + 1].blocked === "active" ||
      aulas[currentClassIndex + 1].wait_days > 0 ||
      releaseAt < dataAtual
    ) {
      setCurrentClassIndex(0);
    } else if (hasNext) {
      setCurrentClassIndex(currentClassIndex + 1);
    }
   
  }

  function RenderVideo() {
    if (aulas[currentClassIndex].host === "videojs") {
      return (
        <VideoMp4
          video={aulas[currentClassIndex]}
          handlePlayClass={handlePlayClass}
        />
      );
    }
    if (
      aulas[currentClassIndex].host === "youtube" &&
      showRenderVideo === true
    ) {
      return (
        <YouTubePlayer
          videoUrl={aulas[currentClassIndex].url_video}
          handlePlayClass={handlePlayClass}
        />
      );
    }
    if (aulas[currentClassIndex].host === "vimeo" && showRenderVideo === true) {
      return (
        <VimeoJs
          video={aulas[currentClassIndex]}
          handlePlayClass={handlePlayClass}
        />
      );
    }
    if (aulas[currentClassIndex].host === "text") {
      return <Text p="4">{aulas[currentClassIndex].slug}</Text>;
    } else {
      return <h1>Loading</h1>;
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
            <RenderVideo />
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
              <>
                {aula.blocked !== "inactive" ||
                aula.published !== "active" ||
                aula.wait_days > 0 ? (
                  <Flex
                    direction="row"
                    my="4"
                    key={aula.id}
                    onClick={() => {}}
                    cursor="not-allowed"
                    transition="all .3s ease"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                    role="group"
                  >
                    <Flex position="relative">
                      <Flex
                        p="1"
                        align="center"
                        position="absolute"
                        right="0"
                        top="0"
                        gap={2}
                        bg="black"
                        borderRadius="sm"
                        zIndex="1"
                      >
                        <FiLock size="24" color="gray" />
                        <Box
                          display="none"
                          transition="all 3s ease"
                          fontSize="smaller"
                          _groupHover={{
                            display: "flex",
                          }}
                        >
                          {aula.wait_days > 0
                            ? `${aula.wait_days} dias restantes`
                            : releaseAt > dataAtual ?`${releaseAt} lançamento` : "Em breve"
                            }
                        </Box>
                      </Flex>
                      <Image
                        className={
                          aula.blocked !== "inactive" ? "blocked" : "allow"
                        }
                        maxW="144px"
                        title={aula.title}
                        borderRadius="md"
                        src={aula.url_banner}
                        alt={aula.title}
                        objectFit="contain"
                        filter="grayscale(1)"
                      />
                    </Flex>

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
                ) : (
                  <Flex
                    direction="row"
                    my="4"
                    key={aula.id}
                    onClick={() => setCurrentClassIndex(index)}
                    cursor={"pointer"}
                    transition="all .3s ease"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  >
                    <Image
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
                )}
              </>
            );
          })}
        </Flex>
      </Flex>
      <Flex justify="space-between" mt="4" px="10">
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
            onClick={handlePlayClass}
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
        <Flex direction="column" fontFamily="Poppins" mt="6">
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
  const response = await apiTest.get("/classes");
  const respondeUser = await apiTest.get("/user");
  return {
    props: {
      users: respondeUser.data,
      aulas: response.data,
    },
  };
});
