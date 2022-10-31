import { Box, HStack, Image, Text } from "@chakra-ui/react";
import play from "../assets/Playc.svg";

const GridMusic = ({ url, title, artist }) => {
  return (
    <Box
      overflow='hidden'
      h={{ base: "236px", md: "226px" }}
      w={{ base: "full", md: "205px" }}
      borderRadius='20px'
    >
      <Box
        className='hover01'
        bgImage={url}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        h={{ base: "236px", md: "226px" }}
        w={{ base: "full", md: "205px" }}
        borderRadius='20px'
        color='#EFEEE0'
        pt='170px'
        pl='10px'
        opacity='0.99'
        _hover={{ pt: "150px", pl: "20px" }}
      >
        <HStack justify='space-between'>
          <Box>
            <Text fontSize='24px' fontWeight='400' pb={0}>
              {title}
            </Text>
            <Text fontSize='10px' fontWeight='200'>
              {artist}
            </Text>
          </Box>

          <Box pr='16px' display={{ base: "block", md: "none" }}>
            <Image src={play} />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default GridMusic;
