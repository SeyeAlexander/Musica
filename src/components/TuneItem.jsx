import { HStack, Box, Flex, Text, Image } from "@chakra-ui/react";
import heartIcon from "../assets/Heart.png";
import dots from "../assets/more-vertical.png";

const TuneItem = ({ song }) => {
  return (
    <HStack
      w='full'
      bg='#33373B5E'
      borderRadius='20px'
      pl='4'
      py='3'
      pr={{ base: "0px", md: "50px" }}
      color='#EFEEE0'
      key={song.id}
    >
      <HStack w='14%'>
        <Image
          src={song.album.images[0].url}
          w={{ base: "42px", md: "40px" }}
          h={{ base: "36px", md: "39px" }}
          borderRadius='5px'
          mr='2'
        />
        <Image src={heartIcon} h='16px' display={{ base: "none", md: "inline" }} />
      </HStack>

      <Flex w='full'>
        <Flex
          w={{ base: "80%", md: "51%" }}
          justify='space-between'
          direction={{ base: "column", md: "row" }}
        >
          <Box w='70%'>
            <Text fontSize='14px'>{song.name}</Text>
          </Box>

          <Flex w='30%' justify={{ base: "start", md: "center" }}>
            <Text fontSize={{ base: "12px", md: "14px" }}>{song.type}</Text>
          </Flex>
        </Flex>

        <Flex
          w={{ base: "20%", md: "49%" }}
          justify='space-between'
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box w='70%' pl={{ base: "0", md: "120px" }}>
            <Text fontSize='14px'>2:30</Text>
          </Box>

          <Box w='30%'>
            <Image src={dots} h='22px' w={{ base: "25px", md: "12px" }} />
          </Box>
        </Flex>
      </Flex>
    </HStack>
  );
};

export default TuneItem;
