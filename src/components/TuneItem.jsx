import { HStack, Box, Flex, Text, Image } from '@chakra-ui/react';
import heartIcon from '../assets/Heart.png';
import dots from '../assets/more-vertical.png';

const TuneItem = ({ img, title, type, time }) => {
  return (
    <HStack
      w="full"
      bg="#33373B5E"
      borderRadius="20px"
      pl="4"
      py="4"
      pr="50px"
      color="#EFEEE0"
      justify="space-between"
    >
      <HStack w="10%">
        <Image src={img} w="39px" mr="2" />
        <Image src={heartIcon} h="16px" />
      </HStack>

      <Box w="20%">
        <Text>{title}</Text>
      </Box>

      <Flex w="45%" justify="center">
        <Text>{type}</Text>
      </Flex>

      <Box w="20%">
        <Text>{time}</Text>
      </Box>

      <Box w="5%">
        <Image src={dots} h="22px" w="12px" />
      </Box>
    </HStack>
  );
};

export default TuneItem;
