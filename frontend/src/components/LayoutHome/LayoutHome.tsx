import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { FeatureMovies } from "../FeatureMovie/FeatureMovies";
import Carousel from "../Carousel/Carousel";

interface LayoutHomeProps {
  children: ReactNode;
}
export function LayoutHome({children}: LayoutHomeProps){

  return (
    <Flex 
    maxWidth={1440}
    mx="auto"
    // zIndex="8"
    // h="100vh"
    // backgroundImage='/images/bg-home.jpg'
    // backgroundSize="cover"
    // backgroundRepeat="no-repeat"
    // backgroundPosition={'top center'}
    // bgClip="linear-gradient( 0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.20211834733893552) 40%, rgba(0, 0, 0, 0) 100% )"
    >

      {/* <Box
      position="relative"
      z-index="3"
      h="100vh"
      backgroundColor='rgba(0, 0, 0, 0.39)'
      bgGradient="linear-gradient( 0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.20211834733893552) 60%, rgba(0, 0, 0, 0) 100% )"
      > */}
        {/* <FeatureMovies/> */}
        {/* <Carousel/> */}
    <Header/>
    {children}
      </Flex>
    
//  </Box>
  )
}