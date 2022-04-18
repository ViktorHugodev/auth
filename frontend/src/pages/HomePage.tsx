import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
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
        maxWidth={1440}
        h="100vh"
        // backgroundColor="rgba(0, 0, 0, 0.39)"
        // bgGradient="linear-gradient( 0deg, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.20211834733893552) 60%, rgba(0, 0, 0, 0) 100% )"
      >
        <FeatureMovies />
      </Box>
      <Flex
        width="100%"
        h="100%"
        position="relative"
        top="600"
        flexDirection="column"
    
        // px="60px"

        // templateColumns="repeat(5, 1fr)"
      >
        <Swiper
          // effect="cards"
          // spaceBetween={25}
          // slidesPerView={2}
          style={{ width: "100%", flex: "1" }}
          // navigation
          // pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            1440: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1080: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            720: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          // direction="horizontal"
        >
          {movies.map((movie, index) => {
            return (
              <SwiperSlide 
              
              key={index}>
                <Box

                  borderRadius="10px"
                  height="482px"
                    width="244px"
                
                  // zIndex={8}
                  // overflow="hidden"
                  transform="scale(0.8)"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    borderRadius: "20px",
                    transition: "all .45s ease-in-out",
                    transform: "scale(1)",
                  }}
                >
                  <Image
                    borderRadius="10px"
                    // transform="scale(0.95)"
                    // overflow="visible"
                    // zIndex={8}
                    // _hover={{
                    //   borderRadius: "10px",
                    //   transition: "all .45s ease-in-out",
                    //   transform: "scale(1.05)",
                    // }}
                    key={index}
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    minH="402px"
                    minW="244px"
                    alt="Name image"
                  />
                </Box>
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
