import { Box, Text } from '@chakra-ui/react';
import one from '../assets/Rectangle 26.svg';

const GridMusic = () => {
  return (
    <Box h="280px" w="250px" borderRadius="20px" color="#EFEEE0">
      <Box bgImage={one} bgPosition="center" bgRepeat="no-repeat">
        <Text>Limits</Text>
        <Text>John Watts</Text>
      </Box>
    </Box>
  );
};

export default GridMusic;
