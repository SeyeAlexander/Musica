import { Text, Flex, Box, HStack, Image, VStack, Button } from "@chakra-ui/react";
import HeartIcon from "../assets/HeartP.svg";
import songList from "../data/songList";

const TunesBanner = ({ onPlayAll }) => {
  const handlePlayAll = () => {
    onPlayAll();
  };

  return (
    <Flex
      ml={{ base: "0px", md: "95px" }}
      mt={{ base: "0px", md: "15px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Image
        src={songList[1].album.images[0].url}
        w={{ base: "full", md: "270px" }}
        h={{ base: "360px", md: "274px" }}
        borderRadius='20px'
      />

      <VStack
        ml={{ base: "0px", md: "30px" }}
        justify='flex-end'
        align='flexStart'
        w={{ base: "full", md: "700px" }}
        spacing='8px'
      >
        <Text fontSize='24px' fontWeight='700' pt={{ base: "4px", md: "0px" }}>
          Tomorrow's tunes
        </Text>
        <Text fontSize='14px' fontWeight='300' w={{ base: "full", md: "700px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum qui, eius iste
          cum nihil ipsam error natus sapiente rem
        </Text>
        <Text fontSize='12px' fontWeight='200'>
          64 songs ~ 16+ hrs
        </Text>

        <HStack spacing={4} pt={{ base: "6px", md: "30px" }} pb={{ base: "0px", md: "10px" }}>
          <Button
            colorScheme='pink'
            variant='outline'
            borderRadius='20px'
            size='sm'
            onClick={handlePlayAll}
          >
            Play all
          </Button>
          <Button colorScheme='twitter' variant='outline' borderRadius='20px' size='sm'>
            Add to collections
          </Button>
          <Box borderRadius='50%' color='gray.700' border='1px' p='8px'>
            <Image src={HeartIcon} w='13px' />
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default TunesBanner;
