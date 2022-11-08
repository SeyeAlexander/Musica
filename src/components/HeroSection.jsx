import { Box, Flex, VStack, Image, Text, HStack } from "@chakra-ui/react";
import HeartIcon from "../assets/Heart.svg";
import Vector from "../assets/Vector.png";

const HeroSection = ({ playlists }) => {
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

          <VStack spacing='2' align='flexStart' w={{ base: "210px", md: "100%" }}>
            <Text
              fontSize={{ base: "15px", md: "35px" }}
              lineHeight='42px'
              fontWeight='700'
              w={{ base: "full", md: "50%" }}
            >
              {playlists[0].name}
            </Text>
            <Text
              fontSize='14px'
              lineHeight='16.8px'
              fontWeight='400'
              w={{ base: "full", md: "50%" }}
            >
              {playlists[0].description}
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
          <Image src={playlists[0].images[0].url} w='381px' h='full' borderRightRadius='30px' />
        </VStack>
      </Flex>

      <VStack w={{ base: "100%", md: "70%" }} align='flexStart'>
        <Text fontSize={{ base: "18px", md: "24px" }} fontWeight='700'>
          Top Charts
        </Text>

        <Box className='overflow' overflowY={{ base: "auto", md: "hidden" }} w='100%'>
          <Flex gap={2} direction={{ base: "row", md: "column" }} w={{ base: "900px", md: "full" }}>
            {playlists &&
              playlists.map((playlist) => (
                <Flex
                  key={playlist.id}
                  bg='#1A1E1F'
                  borderRadius='20px'
                  w={{ base: "xs", md: "md" }}
                  h={{ base: "154px", md: "80px" }}
                  p='2'
                  justify='space-between'
                >
                  <Flex
                    gap={2}
                    direction={{ base: "column", md: "row" }}
                    align={{ base: "none", md: "center" }}
                  >
                    <Image
                      src={playlist.images[0].url}
                      w={{ base: "80px", md: "63px" }}
                      h={{ base: "80px", md: "63px" }}
                      borderRadius={{ base: "5px", md: "10px" }}
                    />

                    <VStack pt={{ base: "0", md: "3px" }} spacing={0} align='flexStart'>
                      <Text fontSize={{ base: "14px", md: "sm" }} fontWeight='medium'>
                        {playlist.name}
                      </Text>
                      <Text fontSize={{ base: "10px", md: "12px" }}>
                        {playlist.owner.display_name}
                      </Text>
                      <Text fontSize={{ base: "10px", md: "10px" }} fontWeight='light'>
                        {playlist.tracks.total} Tracks
                      </Text>
                    </VStack>
                  </Flex>

                  <VStack pt={{ base: 0, md: "6" }}>
                    <Box borderRadius='50%' color='yellow.900' border='1px' p='5px'>
                      <Image src={HeartIcon} w='14px' />
                    </Box>
                  </VStack>
                </Flex>
              ))}
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
