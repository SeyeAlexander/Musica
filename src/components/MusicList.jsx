import { Flex, VStack, Text, HStack, Box } from '@chakra-ui/react';
import MusicItem from './MusicItem';
import one from '../assets/Rectangle 14.png';
import two from '../assets/Rectangle 14 (1).png';
import three from '../assets/Rectangle 14 (2).png';
import four from '../assets/Rectangle 14 (3).png';
import five from '../assets/Rectangle 14 (4).png';
import six from '../assets/Rectangle 14 (5).png';

const MusicList = ({ banner, reference }) => {
  return (
    <Box ml="90px">
      <Box className="overflow" overflowY="hidden" w="100%" h="260px">
        <Flex p="3">
          <VStack color="#EFEEE0" spacing={3} align="flexStart">
            <Text fontSize="lg" fontWeight="medium">
              {banner}
            </Text>

            {/*When fetching data from an api or sourcing locally,keep list to 12 items
            because of HStack width, so the album arts don't shrink from prefered size */}
            <HStack spacing="7" pb="5" w="2200px">
              <MusicItem url={one} title={'Life in a bubble'} />
              <MusicItem url={two} title={'Mountain'} />
              <MusicItem url={three} title={'Limits'} />
              <MusicItem url={four} title={"Everything's black"} />
              <MusicItem url={five} title={'Cancelled'} />
              <MusicItem url={six} title={'Normad'} />
              <MusicItem url={one} title={'Life in a bubble'} />
              <MusicItem url={two} title={'Mountain'} />
              <MusicItem url={three} title={'Limits'} />
              <MusicItem url={four} title={"Everything's black"} />
              <MusicItem url={five} title={'Cancelled'} />
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default MusicList;
