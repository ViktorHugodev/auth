import { Flex, Image } from "@chakra-ui/react";

interface DataProps {
  id: number;
  title: string;
  poster_path: string;
}
interface MoviesProps {
  movie: DataProps;
}
export function CardCourse({movie}: MoviesProps){
  console.log(movie)
  return (
    <Flex direction="row">
      <Image

        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        height='402px'
        width='244px'

        alt="Name image"

        />
   
    </Flex>
  )
}