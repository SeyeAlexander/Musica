import { Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import GridMusic from "./GridMusic";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const GridList = () => {
  return (
    <VStack
      w='full'
      spacing='40px'
      ml={{ base: "0px", md: "95px" }}
      align='flexStart'
      pt={{ base: "5px", md: "15px" }}
    >
      <HStack spacing={4} w='full' justify={{ base: "space-between", md: "start" }}>
        <Button colorScheme='yellow' borderRadius='20px' w={{ base: "50%", md: "120px" }}>
          Collection
        </Button>
        <Button
          variant='outline'
          colorScheme='facebook'
          borderRadius='20px'
          w={{ base: "50%", md: "80px" }}
        >
          likes
        </Button>
      </HStack>

      <SimpleGrid columns={{ base: "1", md: "5" }} spacingX='50px' spacingY='40px'>
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
