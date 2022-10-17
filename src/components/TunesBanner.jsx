import { Text, Flex, HStack, Image, VStack } from "@chakra-ui/react";
import Pic from "../assets/Lead-image.png";

const TunesBanner = () => {
  return (
    <Flex ml='95px' pt='30px'>
      <Image src={Pic} w='284px' h='288.97px' />

      <VStack>
        <Text fontSize='24px' fontWeight='700'>
          Tomorrow's tunes
        </Text>
        <Text fontSize='10px' fontWeight='200'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum qui, eius iste cum nihil ipsam error natus sapiente rem
          exercitationem quae pariatur debitis
        </Text>
        <Text fontSize='10px' fontWeight='200'>
          Test text
        </Text>

        <HStack></HStack>
      </VStack>
    </Flex>
  );
};

export default TunesBanner;
