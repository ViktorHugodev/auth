import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";
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

export default function Aulas2({ videos }: DataProps) {
  
  const [moreLikes, setMoreLikes ] = useState('')
  console.log(moreLikes)
  if(moreLikes === 'maisCurtidos'){
    const moreLike = videos.sort((a,b) => a.likes > b.likes ? 1 : -1);
  }
  return (
    <LayoutHome>
      <FeatureMovies />
      <Flex w="100%" h="100%" direction="column">
        <Flex justify="space-between">
          <Heading px="10" fontWeight="400" fontFamily="Poppins" fontSize="2xl">
            Videos
          </Heading>
          <Flex  align="center" border="1px" borderRadius="md" px="6" mr="12" opacity="0.8">
          <Text   fontFamily="Poppins" whiteSpace={'nowrap'} fontSize="16px">Ordenar por:</Text>
          <Select   border="none"opacity={0.6} onChange={(e)=> setMoreLikes(e.target.value)}>
            
            <option value='Mais asssistos'>Mais assistidos</option>
            <option value='maisCurtidos'>Mais curtidos</option>
            <option value="option3">Option 3</option>
          </Select>
          </Flex>
        </Flex>
        {videos.map((video, index) => {
          return (
            <Flex key={index} align="center" p="10">
              <Flex minW="360px">
                <VideoCard video={video} index={index} />
              </Flex>
              <Flex>
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
