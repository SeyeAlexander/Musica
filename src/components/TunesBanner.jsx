import { Text, Flex, Box, HStack, Image, VStack, Button } from "@chakra-ui/react";
import Pic from "../assets/Lead-image.png";
import HeartIcon from "../assets/HeartP.svg";

const TunesBanner = () => {
  return (
    <Flex ml='95px' mt='30px'>
      <Image src={Pic} w='270px' h='274px' />

      <VStack ml='30px' justify='flex-end' align='flexStart' w='700px' spacing='8px'>
        <Text fontSize='24px' fontWeight='700'>
          Tomorrow's tunes
        </Text>
        <Text fontSize='14px' fontWeight='300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum qui, eius iste cum nihil ipsam error natus sapiente rem
        </Text>
        <Text fontSize='12px' fontWeight='200'>
          64 songs ~ 16+ hrs
        </Text>

        <HStack spacing={4} pt='30px' pb='10px'>
          <Button colorScheme='pink' variant='outline' borderRadius='20px' size='sm'>
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
