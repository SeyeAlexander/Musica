import { Image, Text, VStack } from "@chakra-ui/react";

const MusicItem = ({ url, title }) => {
  return (
    <VStack spacing={2} align='flexStart'>
      <Image src={url} w={{ base: "100px", md: "150px" }} />
      <Text fontSize={{ base: "12px", md: "14px" }} fontWeight='thin'>
        {title}
      </Text>
    </VStack>
  );
};

export default MusicItem;
