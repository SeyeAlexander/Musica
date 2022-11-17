import { Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

const ReleaseItem = ({ releaseItem }) => {
  const count = useBreakpointValue({
    base: "12",
    md: "22",
  });

  const songTitle =
    releaseItem.name.slice(0, count) + (releaseItem.name.length > count ? ".." : "");

  return (
    <VStack className='zoom' spacing={2} align='flexStart' pt={2}>
      <Image
        src={releaseItem.images[0].url}
        w={{ base: "100px", md: "150px" }}
        h={{ base: "105px", md: "155px" }}
        borderRadius='15px'
      />
      <Text fontSize='12px' fontWeight='thin' w={{ base: "100px", md: "150px" }}>
        {songTitle}
      </Text>
    </VStack>
  );
};

export default ReleaseItem;
