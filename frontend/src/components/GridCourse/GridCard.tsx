import { Grid } from "@chakra-ui/react";
import { CardCourse } from "./GridCourse";

export function GridCard(){
  return (
    <Grid templateColumns={"auto"} gap="4">
      <CardCourse />
    </Grid>
  )
}