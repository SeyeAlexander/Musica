import { Button, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import GridMusic from './GridMusic';

const GridList = () => {
  return (
    <VStack spacing="50px" ml="95px" align="flexStart" py="30px">
      <HStack spacing={4}>
        <Button colorScheme="yellow" borderRadius="20px">
          Collection
        </Button>
        <Button
          variant="outline"
          colorScheme="facebook"
          borderRadius="20px"
          w="80px"
        >
          likes
        </Button>
      </HStack>

      <SimpleGrid columns={5} spacingX="60px" spacingY="40px">
        <GridMusic />
        <GridMusic />
      </SimpleGrid>
    </VStack>
  );
};

export default GridList;
