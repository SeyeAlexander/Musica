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
import Picture from "../assets/Pexels Photo by Eric Esma.png";
import Vector from "../assets/Vector.png";

const HeroSection = () => {
  return (
    <Box ml='1' pt='80px' mb='6' color='#EFEEE0'>
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

        <Flex w='full' h='373px' borderRadius='30px' bg='#609EAF' bgImage={Vector} bgPosition='right' bgRepeat='no-repeat'>
          <VStack w='50%' align='flex-start' justify='space-between' py='50px' pl='50px'>
            <Text fontSize='13px' lineHeight='14.4px'>
              Curated playlists
            </Text>

            <VStack spacing='2' align='flexStart' w='273px'>
              <Text fontSize='35px' lineHeight='42px' fontWeight='700'>
                R & B Hits
              </Text>
              <Text fontSize='14px' lineHeight='16.8px' fontWeight='400'>
                All mine, Lie again, Pretty call me everyday, Out of time, No love, Bad habit <br /> and so much more
              </Text>
            </VStack>

            <HStack>
              <Image src={HeartIcon} w='14px' />
              <Text fontSize='14px' lineHeight='16.8px'>
                33.4k Likes
              </Text>
            </HStack>
          </VStack>

          <VStack w='50%'>
            <Image src={Picture} h='373px' />
          </VStack>
        </Flex>

        <VStack w='70%' align='flexStart'>
          <Text fontSize='24px' fontWeight='md'>
            Top Charts
          </Text>

          <HStack bg='#1A1E1F' borderRadius='15px' w='md' p='4'>
            <Image src={one} w='63px' />
            <HStack justify='space-between' w='full'>
              <VStack spacing={0} align='flexStart'>
                <Text fontSize='sm' fontWeight='medium'>
                  Golden age of 80
                </Text>
                <Text fontSize='xs'>Sean Swadder</Text>
                <Text fontSize='xs' fontWeight='light'>
                  2:34:45
                </Text>
              </VStack>
              <Box borderRadius='50%' color='yellow.900' border='1px' p='5px'>
                <Image src={HeartIcon} w='14px' />
              </Box>
            </HStack>
          </HStack>

          <HStack bg='#1A1E1F' borderRadius='15px' w='md' p='4'>
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
              <Box borderRadius='50%' color='yellow.900' border='1px' p='5px'>
                <Image src={HeartIcon} w='14px' />
              </Box>
            </HStack>
          </HStack>

          <HStack bg='#1A1E1F' borderRadius='15px' w='md' p='4'>
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
              <Box borderRadius='50%' color='yellow.900' border='1px' p='5px'>
                <Image src={HeartIcon} w='14px' />
              </Box>
            </HStack>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default HeroSection;