import { Image, Text, VStack } from "@chakra-ui/react";

const ReleaseItem = ({ releaseItem }) => {
  return (
    <VStack className='zoom' key={releaseItem.id} spacing={2} align='flexStart' pt={2}>
      <Image
        src={releaseItem.images[0].url}
        w={{ base: "100px", md: "150px" }}
        h={{ base: "105px", md: "155px" }}
        borderRadius='15px'
      />
      <Text fontSize='12px' fontWeight='thin' w={{ base: "100px", md: "150px" }}>
        {releaseItem.name}
      </Text>
    </VStack>
  );
};

export default ReleaseItem;
