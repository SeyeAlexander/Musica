import {
  Flex,
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Progress,
} from '@chakra-ui/react';
import albumArt from '../assets/Rectangle 26.png';
import VolIcon from '../assets/volume-high.svg';
import ShuffleIcon from '../assets/shuffle.svg';
import PreviousIcon from '../assets/previous.svg';
import PlayIcon from '../assets/VectorP.svg';
import NextIcon from '../assets/next.svg';
import RepeatIcon from '../assets/repeate-one.svg';
import { useState } from 'react';

const Player = ({ handlePlayBack }) => {
  const [playBack, setPlayBack] = useState('');

  const handlePlay = () => {
    setPlayBack('pause');
    handlePlayBack(playBack);
    console.log(playBack);
  };

  return (
    <Box position="fixed" bottom="0" bg="#1E1E1E" w="1410px" h="100px">
      <Flex color="#EFEEE0" bg="#1E1E1E" opacity="0.99" ml="95px">
        <HStack w="5%">
          <Image src={albumArt} w="49px" borderRadius="14px"></Image>
        </HStack>

        <VStack w="8%" align="flexStart" spacing={0} mt={5} p={0}>
          <Text fontSize="14px">Seasons in</Text>
          <Text fontSize="10px">James</Text>
        </VStack>

        <VStack w="63%" py={4} px={6} spacing={4}>
          <HStack spacing="53px">
            <Box>
              <Image src={ShuffleIcon} w="18px" />
            </Box>
            <Box>
              <Image src={PreviousIcon} w="18px" />
            </Box>
            <Box onClick={handlePlay}>
              <Image
                src={PlayIcon}
                borderRadius="50%"
                w="100%"
                h="100%"
                bg="yellow.400"
                p="3"
                color="#EFEEE0"
              />
            </Box>
            <Box>
              <Image src={NextIcon} w="18px" />
            </Box>
            <Box>
              <Image src={RepeatIcon} w="18px" />
            </Box>
          </HStack>

          <Slider colorScheme="yellow" defaultValue={40}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>

        <VStack w="24%" py={5} px={2} mt="5" align="flexStart">
          <HStack>
            <Image src={VolIcon} w="18px" />
            <Progress
              value={70}
              size="xs"
              w="40%"
              borderRadius="2px"
              colorScheme="yellow"
            />
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Player;
