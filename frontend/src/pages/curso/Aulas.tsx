import { Box, Flex, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { VideoCard } from "../../components/CardAula/VideoCard";
import { VideoInformation } from "../../components/CardAula/VideoInformation";
import { FeatureMovies } from "../../components/FeatureMovie/FeatureMovies";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome";
import { getVideosFromDb } from "../../services/firebase/getVideosFromDb";
export interface VideoProps {
  addAt: string;
  description: string;
  displayName: string;
  fullName: string;
  publishedAt: string;
  title: string;
  userId: string;
  userPhoto: string;
  likes: number;
  unlikes: number;
  videoId: string;
  liked: string[];
  unliked: string[];
}

export interface DataProps {
  videos: VideoProps[];
}

export default function Aulas({ videos }: DataProps) {
  return (
    <LayoutHome>
      <FeatureMovies />
      <Flex w="100%" h="100%" direction="column">
        <Heading px="10" fontWeight="400" fontFamily="Poppins" fontSize="2xl">Playlist</Heading>
        {videos.map((video, index) => {
          return (
            <Flex key={index} align="center" p="10">
              <Flex minW="360px"  >
                <VideoCard video={video} index={index} />
              </Flex>
              <Flex >
                <VideoInformation video={video} />
              </Flex>
            </Flex>
          );
        })}
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
