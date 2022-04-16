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
      <Grid
        position="relative"
        top="800"
        px="60px"
        // templateColumns="repeat(5, 1fr)"
      >
        <Swiper
          // spaceBetween={25}
          // slidesPerView={2}
          style={{ width: "100%", flex: "1" }}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            1440:{
              slidesPerView: 5,
              spaceBetween: 5
            },
            1080:{
              slidesPerView: 4,
              spaceBetween: 5
            },
            720:{
              slidesPerView: 3,
              spaceBetween: 5
            },
            480:{
              slidesPerView: 2,
              spaceBetween: 5
            }
          }}
          // direction="horizontal"
        >
          {movies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                {/* <Box > */}
                  <Image
                  borderRadius="10px"
                    transform="scale(0.95)"
                  _hover={{
                    borderRadius:"30px",
                    transition:"all .25s ease-in-out",
                    transform: "scale(1.05)",
                  }}
                    key={index}
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    height="402px"
                    width="244px"
                    alt="Name image"
                  />
                {/* </Box> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
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
