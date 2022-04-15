import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { GridCard } from "../components/GridCourse/GridCard";
import { CardCourse } from "../components/GridCourse/CardCourse";
import { LayoutHome } from "../components/LayoutHome/LayoutHome";
import { apiMovies } from "../services/apiMovies";
import { FeatureMovies } from "../components/FeatureMovie/FeatureMovies";
import Carousel from "../components/Carousel/Carousel";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
interface DataProps {
  id: number;
  title: string;
  poster_path: string;
}
interface MoviesProps {
  movies: DataProps[];
}
export default function HomePage({ movies }: MoviesProps) {
  console.log(movies);
  return (
    <LayoutHome>
      <Box
        position="absolute"
        width="100%"
        h="100vh"
        backgroundColor="rgba(0, 0, 0, 0.39)"
        bgGradient="linear-gradient( 0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.20211834733893552) 60%, rgba(0, 0, 0, 0) 100% )"
      >
        <FeatureMovies />
      </Box>
      <Flex position="relative" top="800" px="12" zIndex="0" w="100%">
        <Swiper
          slidesPerView={5}
          style={{ width: "100%", flex: "1" }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                  height="402px"
                  width="244px"
                  alt="Name image"
                ></Image>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
      </Flex>
     
    </LayoutHome>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apiMovies.get("");
  console.log(data);

  return {
    props: {
      movies: data.results,
    },
  };
};
