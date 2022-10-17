import { Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import GridMusic from "./GridMusic";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const GridList = () => {
  return (
    <VStack spacing='40px' ml='95px' align='flexStart' pt='30px'>
      <HStack spacing={4}>
        <Button colorScheme='yellow' borderRadius='20px'>
          Collection
        </Button>
        <Button variant='outline' colorScheme='facebook' borderRadius='20px' w='80px'>
          likes
        </Button>
      </HStack>

      <SimpleGrid columns={4} spacingX='70px' spacingY='40px'>
        <GridMusic url={three} title={"Limits"} artist={"John Watts"} />
        <GridMusic url={two} title={"Cancelled"} artist={"Bryan"} />
        <GridMusic url={one} title={"Life in a bubble"} artist={"John"} />
        <GridMusic url={four} title={"Seasons in"} artist={"James"} />
        <GridMusic url={three} title={"Limits"} artist={"John Watts"} />
        <GridMusic url={two} title={"Cancelled"} artist={"Bryan"} />
        <GridMusic url={one} title={"Life in a bubble"} artist={"John"} />
      </SimpleGrid>
    </VStack>
  );
};

export default GridList;
