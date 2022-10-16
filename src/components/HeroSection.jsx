import { Box, Flex, VStack, Image, Text, HStack } from "@chakra-ui/react";
import HomeIcon from "../assets/Home.svg";
import PlaylistIcon from "../assets/playlist.svg";
import RadioIcon from "../assets/radio.svg";
import VideoIcon from "../assets/videos.svg";
import ProfileIcon from "../assets/profile.svg";
import LogoutIcon from "../assets/Logout.svg";
import one from "../assets/Rectangle 17.svg";
import two from "../assets/Rectangle 17 (1).svg";
import three from "../assets/Rectangle 17 (2).svg";
import HeartIcon from "../assets/Heart.svg";

const HeroSection = () => {
  return (
    <Box ml='1' mt='7' mb='6' color='#EFEEE0'>
      <Flex gap={6}>
        <VStack w='10%' spacing={8}>
          <VStack borderRadius='15px' py='5' px='1' bg='#1A1E1F' spacing={6}>
            <Image src={HomeIcon} w='35px' />
            <Image src={PlaylistIcon} w='22px' />
            <Image src={RadioIcon} w='22px' />
            <Image src={VideoIcon} w='22px' />
          </VStack>

          <VStack borderRadius='15px' py='5' px='3' bg='#1A1E1F' spacing={6}>
            <Image src={ProfileIcon} w='22px' />
            <Image src={LogoutIcon} w='22px' />
          </VStack>
        </VStack>

        <Box w='full' h='373px' borderRadius='15px' bg='#609EAF'>
          Results
        </Box>

        <VStack w='70%' align='flexStart'>
          <Text fontSize='24px' fontWeight='medium'>
            Top Charts
          </Text>

          <HStack bg='#1A1E1F' borderRadius='15px' w='md' p='4'>
            <Image src={one} w='63px' />
            <HStack justifyContent='space-between' w='full'>
              <VStack spacing={0} align='flexStart'>
                <Text fontSize='md' fontWeight='medium'>
                  Golden age of 80
                </Text>
                <Text fontSize='xs'>Sean Swadder</Text>
                <Text fontSize='xs' fontWeight='light'>
                  2:34:45
                </Text>
              </VStack>
              <Image src={HeartIcon} w='14px' />
            </HStack>
          </HStack>

          <HStack bg='#1A1E1F' borderRadius='15px' w='md' p='4' spacing={4}>
            <Image src={two} w='63px' />
            <HStack justify='space-between' w='full'>
              <VStack spacing={0} align='flexStart'>
                <Text fontSize='sm' fontWeight='medium'>
                  Reggae "n" Blues
                </Text>
                <Text fontSize='xs'>Dj Yk Mule</Text>
                <Text fontSize='xs' fontWeight='light'>
                  1:02:42
                </Text>
              </VStack>
              <Image src={HeartIcon} w='14px' />
            </HStack>
          </HStack>

          <HStack bg='#1A1E1F' borderRadius='15px' w='md' p='4' spacing={4}>
            <Image src={three} w='63px' />
            <HStack justify='space-between' w='full'>
              <VStack spacing={0} align='flexStart'>
                <Text fontSize='sm' fontWeight='medium'>
                  Tomorrow's tunes
                </Text>
                <Text fontSize='xs'>Obi Datti</Text>
                <Text fontSize='xs' fontWeight='light'>
                  2:01:25
                </Text>
              </VStack>
              <Image src={HeartIcon} w='14px' />
            </HStack>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HeroSection;
