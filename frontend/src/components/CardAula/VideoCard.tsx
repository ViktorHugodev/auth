import { AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";
export interface VideoProps {
  addAt: string;
  description: string;
  displayName: string;
  fullName: string;

  title: string;

  userPhoto: string;

  videoId: string;
}
export interface DataProps {
  video: VideoProps;
  index: number;
}
export function VideoCard({ video, index }: DataProps) {
  return (
    // <Flex w="100%" direction="row">
    <Box minW="360px"borderRadius="lg" overflow="hidden" >
      <AspectRatio maxW="480px" ratio={16 / 9} borderRadius="lg">
        <iframe
          title={video.title}
          src={`https://www.youtube.com/embed/${video.videoId}`}
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Box>
  );
}
