import { Flex, Heading, Text } from "@chakra-ui/react";

interface VideoProps {
  addAt: string;
  description: string;

  fullName: string;

  title: string;
}
interface DataProps {
  video: VideoProps;
}
export function VideoInformation({ video }) {
  return (
    <Flex direction="column" align="flex-start-" fontFamily="Poppins" justify="space-between" p="10"letterSpacing={1.1}>
      <Flex mb="4" fontSize="md">
        <Text  mr="4"color="green">Mais curtidos</Text>
        <Text>30:24</Text>
      </Flex>

      <Heading fontSize="lg" fontWeight='700' fontFamily="Poppins">{video.title}</Heading>
      <Text mt="4" fontWeight="400" fontFamily="Poppins">{video.description.slice(0, 100)}</Text>
    </Flex>
  );
}
