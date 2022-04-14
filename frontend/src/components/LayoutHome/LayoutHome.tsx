import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header/Header";

interface LayoutHomeProps {
  children: ReactNode;
}
export function LayoutHome({children}: LayoutHomeProps){

  return (
    <Box 
    h="100%"
    backgroundImage='/images/bg-home.jpg'
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition={'top center'}
    bgClip="linear-gradient( 0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.20211834733893552) 40%, rgba(0, 0, 0, 0) 100% )"
    >
      <Box
      position="relative"
      // z-index="1"
      h="100vh"
      // backgroundColor='rgba(0, 0, 0, 0.39)'
      bgGradient="linear-gradient( 0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.20211834733893552) 60%, rgba(0, 0, 0, 0) 100% )"
      >
    <Header/>
    {children}
      </Box>
    
    </Box>
  )
}