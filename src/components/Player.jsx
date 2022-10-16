import { Flex, Box, Image, Text, VStack, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Progress } from "@chakra-ui/react";
import albumArt from "../assets/Rectangle 26.png";
import VolIcon from "../assets/volume-high.svg";
import ShuffleIcon from "../assets/shuffle.svg";
import PreviousIcon from "../assets/previous.svg";
import PlayIcon from "../assets/VectorP.svg";
import NextIcon from "../assets/next.svg";
import RepeatIcon from "../assets/repeate-one.svg";

const Player = () => {
  return (
    <Box position='fixed' w='100%' bottom='0' right='0.2vw' bg='#1E1E1E' h='14vh' opacity='0.97'>
      <Flex color='#EFEEE0' maxW='83vw' mx='auto'>
        <HStack w='8%'>
          <Image src={albumArt} w='49px' borderRadius='14px'></Image>
        </HStack>

        <VStack w='10%' align='flexStart' spacing={0} mt={5}>
          <Text fontSize='14px'>Seasons in</Text>
          <Text fontSize='10px'>James</Text>
        </VStack>

        <VStack w='full' p={4} spacing={4}>
          <HStack spacing='53px'>
            <Box>
              <Image src={ShuffleIcon} w='18px' />
            </Box>
            <Box>
              <Image src={PreviousIcon} w='18px' />
            </Box>
            <Box>
              <Image src={PlayIcon} borderRadius='50%' w='100%' h='100%' bg='yellow.400' p='3' color='#EFEEE0' />
            </Box>
            <Box>
              <Image src={NextIcon} w='18px' />
            </Box>
            <Box>
              <Image src={RepeatIcon} w='18px' />
            </Box>
          </HStack>

          <Slider colorScheme='yellow' defaultValue={40}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>

        <VStack w='30%' p={3} mt='5' align='flexStart'>
          <HStack>
            <Image src={VolIcon} w='18px' />
            <Progress value={70} size='xs' w='full' borderRadius='2px' colorScheme='yellow' />
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Player;
