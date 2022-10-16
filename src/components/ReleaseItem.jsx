import { Image, Text, VStack } from "@chakra-ui/react";

const ReleaseItem = ({ url, title }) => {
  return (
    <VStack spacing={2} align='flexStart'>
      <Image src={url} w='153px' />
      <Text fontSize='xs' fontWeight='thin'>
        {title}
      </Text>
    </VStack>
  );
};

export default ReleaseItem;
