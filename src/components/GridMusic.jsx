import { Box, Text } from "@chakra-ui/react";

const GridMusic = ({ url, title, artist }) => {
  return (
    <Box
      bgImage={url}
      bgPosition='center'
      bgRepeat='no-repeat'
      h='234px'
      w='213px'
      borderRadius='20px'
      color='#EFEEE0'
      mt='10px'
      pt='170px'
      pl='10px'
      opacity='0.99'
    >
      <Text fontSize='24px' fontWeight='400' pb={0}>
        {title}
      </Text>
      <Text fontSize='10px' fontWeight='200'>
        {artist}
      </Text>
    </Box>
  );
};

export default GridMusic;
