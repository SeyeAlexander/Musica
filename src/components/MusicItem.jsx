import { Image, Text, VStack } from '@chakra-ui/react';

const MusicItem = ({ url, title, width, height }) => {
  return (
    <VStack spacing={2} align="flexStart">
      <Image src={url} w={width} />
      <Text fontSize="12px" fontWeight="thin">
        {title}
      </Text>
    </VStack>
  );
};

export default MusicItem;
