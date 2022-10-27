import { Box, Flex, VStack, Image, Text, HStack } from "@chakra-ui/react";
import one from "../assets/Rectangle 17.svg";
import two from "../assets/Rectangle 17 (1).svg";
import three from "../assets/Rectangle 17 (2).svg";
import HeartIcon from "../assets/Heart.svg";
import Picture from "../assets/Pexels Photo by Eric Esma.png";
import Vector from "../assets/Vector.png";

const HeroSection = () => {
  return (
    <Flex
      w='full'
      gap={6}
      ml={{ base: "0px", md: "95px" }}
      mt={{ base: "0px", md: "15px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        w='full'
        h={{ base: "470px", md: "359px" }}
        borderRadius={{ base: "15px", md: "30px" }}
        bg='#609EAF'
        bgImage={Vector}
        bgPosition='right'
        bgRepeat='no-repeat'
      >
        <VStack
          w='50%'
          align='flex-start'
          justify='space-between'
          py={{ base: "20px", md: "50px" }}
          pl={{ base: "20px", md: "50px" }}
        >
          <Text fontSize='13px' lineHeight='14.4px'>
            Curated playlists
          </Text>

          <VStack spacing='2' align='flexStart' w={{ base: "210px", md: "290px" }}>
            <Text fontSize={{ base: "15px", md: "35px" }} lineHeight='42px' fontWeight='700'>
              R & B Hits
            </Text>
            <Text fontSize='14px' lineHeight='16.8px' fontWeight='400'>
              All mine, Lie again, Pretty call me everyday, <br /> Out of time, No love, Bad habit{" "}
              <br /> and so much more
            </Text>
          </VStack>

          <HStack>
            <Image src={HeartIcon} w='14px' h='14px' />
            <Text fontSize='14px' lineHeight='16.8px'>
              33.4k Likes
            </Text>
          </HStack>
        </VStack>

        <VStack w='50%' display={{ base: "none", md: "flex" }}>
          <Image src={Picture} w='381px' />
        </VStack>
      </Flex>

      <VStack w={{ base: "100%", md: "70%" }} align='flexStart'>
        <Text fontSize={{ base: "18px", md: "24px" }} fontWeight='700'>
          Top Charts
        </Text>

        <Box className='overflow' overflowY={{ base: "auto", md: "hidden" }} w='100%'>
          <Flex gap={2} direction={{ base: "row", md: "column" }} w={{ base: "900px", md: "full" }}>
            <Flex
              bg='#1A1E1F'
              borderRadius='20px'
              w={{ base: "xs", md: "md" }}
              h={{ base: "154px", md: "100px" }}
              p='2'
              justify='space-between'
            >
              <Flex gap={2} direction={{ base: "column", md: "row" }}>
                <Image src={one} w={{ base: "80px", md: "63px" }} />

                <VStack pt={{ base: "0", md: "3" }} spacing={0} align='flexStart'>
                  <Text fontSize={{ base: "14px", md: "sm" }} fontWeight='medium'>
                    Golden age of 80
                  </Text>
                  <Text fontSize={{ base: "12px", md: "xs" }}>Sean Swadder</Text>
                  <Text fontSize={{ base: "12px", md: "xs" }} fontWeight='light'>
                    2:34:45
                  </Text>
                </VStack>
              </Flex>

              <VStack pt={{ base: 0, md: "6" }}>
                <Box borderRadius='50%' color='yellow.900' border='1px' p='5px'>
                  <Image src={HeartIcon} w='14px' />
                </Box>
              </VStack>
            </Flex>

            <Flex
              bg='#1A1E1F'
              borderRadius='20px'
              w={{ base: "xs", md: "md" }}
              h={{ base: "154px", md: "100px" }}
              p='2'
              justify='space-between'
            >
              <Flex gap={2} direction={{ base: "column", md: "row" }}>
                <Image src={two} w={{ base: "80px", md: "63px" }} />

                <VStack pt={{ base: "0", md: "3" }} spacing={0} align='flexStart'>
                  <Text fontSize={{ base: "14px", md: "sm" }} fontWeight='medium'>
                    Reggae "n" Blues
                  </Text>
                  <Text fontSize={{ base: "12px", md: "xs" }}>Dj Yk Mule</Text>
                  <Text fontSize={{ base: "12px", md: "xs" }} fontWeight='light'>
                    1:02:42
                  </Text>
                </VStack>
              </Flex>

              <VStack pt={{ base: 0, md: "6" }}>
                <Box borderRadius='50%' color='yellow.900' border='1px' p='5px'>
                  <Image src={HeartIcon} w='14px' />
                </Box>
              </VStack>
            </Flex>

            <Flex
              bg='#1A1E1F'
              borderRadius='20px'
              w={{ base: "xs", md: "md" }}
              h={{ base: "154px", md: "100px" }}
              p='2'
              justify='space-between'
            >
              <Flex gap={2} direction={{ base: "column", md: "row" }}>
                <Image src={three} w={{ base: "80px", md: "63px" }} />

                <VStack pt={{ base: "0", md: "3" }} spacing={0} align='flexStart'>
                  <Text fontSize={{ base: "14px", md: "sm" }} fontWeight='medium'>
                    Tomorrow's tunes
                  </Text>
                  <Text fontSize={{ base: "12px", md: "xs" }}>Obi Datti</Text>
                  <Text fontSize={{ base: "12px", md: "xs" }} fontWeight='light'>
                    2:01:25
                  </Text>
                </VStack>
              </Flex>

              <VStack pt={{ base: 0, md: "6" }}>
                <Box borderRadius='50%' color='yellow.900' border='1px' p='5px'>
                  <Image src={HeartIcon} w='14px' />
                </Box>
              </VStack>
            </Flex>
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
