import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { FeatureMovies } from "../FeatureMovie/FeatureMovies";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

interface LayoutHomeProps {
  children: ReactNode;
}
export function LayoutHome({ children }: LayoutHomeProps) {
  return (
    <Box mx="auto">
      <Header />
      {children}
      <Footer/>
    </Box>
  );
}
