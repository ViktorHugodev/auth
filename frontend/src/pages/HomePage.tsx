import {
  AspectRatio,
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { CardCourse } from "../components/GridCourse/CardCourse";
import { LayoutHome } from "../components/LayoutHome/LayoutHome";
import { apiMovies } from "../services/apiMovies";
import { FeatureMovies } from "../components/FeatureMovie/FeatureMovies";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import IconPlay from "../../public/images/play.svg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

import "swiper/css/a11y";
import Link from "next/link";
interface DataProps {
  vote_average: any;
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  name: string;
  original_name: string;
}
interface MoviesProps {
  movies: DataProps[];
}
export default function HomePage({ movies }: MoviesProps) {
  console.log(movies);

  const sort = [...movies];

  const moviesSort = sort
    .sort((a, b) => (a.vote_average > b.vote_average ? -1 : 1))
    .slice(0, 10);
  console.log("sort", sort);
  return (
    <LayoutHome>
      <FeatureMovies />
      <Box>
        <Heading fontFamily="Poppins" fontWeight={"400"} fontSize="3xl" px="10">
          Cursos
        </Heading>
        <Box>
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              EffectCoverflow,
            ]}
            fadeEffect={{
              crossFade: true,
            }}
            style={{ width: "100%", flex: "1" }}
            navigation
            slidesOffsetAfter={40}
            slidesOffsetBefore={40}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              280: {
                slidesPerView: 2.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },

              // when window width is >= 640px
              480: {
                slidesPerView: 3.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              // when window width is >= 920px
              920: {
                slidesPerView: 4.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 4.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              1680: {
                slidesPerView: 5.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              1920: {
                slidesPerView: 6.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              2560: {
                slidesPerView: 6.2,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
            }}
          >
            {movies.map((movie, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box
                    zIndex={2}
                    py="6"
                    borderRadius="10px"
                    // position="relative"
                    // overflow="hidden"
                    transition="all .2s ease"
                    _groupHover={{
                      borderRadius: "10px",
                      transform: "scale(1.03)",
                      zIndex: "4",
                    }}
                    mb="4"
                  >
                    <Image
                      transition="all .35s ease"
                      _groupHover={{
                        zIndex: "2",
                        boxShadow: "dark-lg",
                      }}
                      borderRadius="10px"
                      key={index}
                      src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                      alt="Name image"
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
        <Heading fontFamily="Poppins" fontWeight={"400"} px="10" fontSize="3xl">
          Aulas
        </Heading>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          // effect="coverflow"
          slidesOffsetAfter={40}
          slidesOffsetBefore={40}
          fadeEffect={{
            crossFade: true,
          }}
          // followFinger={false}
          style={{ width: "100%", height: "100%;", flex: "1" }}
          // navigation

          centeredSlides={false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            280: {
              slidesPerView: 2.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },

            // when window width is >= 640px
            480: {
              slidesPerView: 3.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            // when window width is >= 920px
            920: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            1680: {
              slidesPerView: 5.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            1920: {
              slidesPerView: 6.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            2560: {
              slidesPerView: 6.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
          }}
          // direction="horizontal"
        >
          {movies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={"#"}>
                  <a>
                    <Box
                      position="relative"
                      py="8"
                      h="100%"
                      borderRadius="10px"
                      // transition="all .2s ease"
                      _groupHover={{
                        // filter: "brightness(1.2)",
                        borderRadius: "10px",
                        transform: "scale(1.03)",
                        zIndex: "0",
                      }}
                      transition="all 1s ease"
                    >
                      <Flex
                        position="absolute"
                        width="100%"
                        height="100%"
                        // bg="rgba(18, 18, 18, .25)"
                      >
                        <Flex
                          transition="all .3s ease"
                          width="100%"
                          height="100%"
                          position="relative"
                          direction="column"
                          display="none"
                          _groupHover={{
                            display: "flex",
                            zIndex: "2",
                          }}
                        >
                          <Text pt="2" px="2" fontSize="12px">
                            {movie.original_name}
                          </Text>
                          <Text px="2" fontSize="16px">
                            {movie.name}
                          </Text>

                          <Box
                            height="20%"
                            w="90%"
                            position="relative"
                            bottom="calc(120px - 60%)"
                            left="5%"
                          >
                            <Flex zIndex="2" p="2" mt={["0", "0", "8", "8"]}>
                              <Image
                                px="2"
                                transition="all .3s ease"
                                _hover={{
                                  transform: "scale(1.2)",
                                  filter: "brightness(1.2)",
                                }}
                                src="/images/play.svg"
                                alt="Play vídeo"
                                display="flex"
                              />
                              <Image
                                transition="all .3s ease"
                                ml="4"
                                _hover={{
                                  transform: "scale(1.2)",
                                  filter: "brightness(1.2)",
                                }}
                                src="/images/info.svg"
                                alt="Play vídeo"
                                display="flex"
                              />
                            </Flex>

                            <Progress
                              mt="2"
                              alignSelf="center"
                              borderRadius="4px"
                              value={20}
                              size="xs"
                              color="red.main"
                            />
                          </Box>
                        </Flex>
                      </Flex>

                      <Image
                        transition="all .3s ease"
                        // transform="scale(1)"

                        _groupHover={{
                          boxShadow: "dark-lg",
                          borderRadius: "10px",
                          transform: "scale(1.03)",
                          filter: "brightness(.6)",
                        }}
                        borderRadius="10px"
                        key={index}
                        src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                        alt="Name image"
                      />
                    </Box>
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}
          <Box></Box>
        </Swiper>
        <Heading fontFamily="Poppins" fontWeight={"400"} px="10" fontSize="3xl">
          Em alta
        </Heading>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          // effect="coverflow"
          slidesOffsetAfter={40}
          slidesOffsetBefore={40}
          fadeEffect={{
            crossFade: true,
          }}
          // followFinger={false}
          style={{ width: "100%", height: "100%;", flex: "1" }}
          // navigation

          centeredSlides={false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            280: {
              slidesPerView: 2.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },

            // when window width is >= 640px
            480: {
              slidesPerView: 3.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            // when window width is >= 920px
            920: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            1680: {
              slidesPerView: 5.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            1920: {
              slidesPerView: 6.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            2560: {
              slidesPerView: 6.2,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
          }}
          // direction="horizontal"
        >
          {moviesSort.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={"#"}>
                  <a>
                    <Flex
                      // minH="100px"
                      // w="100%"
                      maxH="450px"
                      py="12"
                      px="10"
                      // h="100%"
                      position="relative"
                      justify="space-between"
                      alignItems="center"
                      // alignItems="center"
                      borderRadius="10px"
                      // transition="all .2s ease"
                      _groupHover={{
                        borderRadius: "10px",
                        transform: "scale(1.03)",
                      }}
                      transition="all 1s ease"
                    >
                      <Image
                        alt="index"
                        zIndex="0"
                        opacity="0.8"
                        // zIndex="0"
                        w="40%"
                        src={`/images/0${index + 1}.png`}
                      />
                      <Image
                        transition="all .2s ease"
                        position="relative"
                        // transform="scale(1)"
                        // zIndex={2}
                        boxShadow="-16px 7px 8px 2px #000000"
                        zIndex="2"
                        borderRadius="10px"
                        key={index}
                        src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                        alt="Name image"
                      />
                    </Flex>
                  </a>
                </Link>
              </SwiperSlide>
            );
          })}
          <Box></Box>
        </Swiper>
      </Box>
    </LayoutHome>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apiMovies.get("");


  return {
    props: {
      movies: data.results,
    },
  };
};
