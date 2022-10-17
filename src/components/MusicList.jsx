import { HStack, Box } from '@chakra-ui/react';
import MusicItem from './MusicItem';
import one from '../assets/Rectangle 14.png';
import two from '../assets/Rectangle 14 (1).png';
import three from '../assets/Rectangle 14 (2).png';
import four from '../assets/Rectangle 14 (3).png';
import five from '../assets/Rectangle 14 (4).png';
import six from '../assets/Rectangle 14 (5).png';

const MusicList = ({ reference }) => {
  return (
    <Box ml="95px">
      <Box className="overflow" overflowY="hidden" w="100%" h="200px">
        <HStack spacing="7" pb="5" w="2200px" color="#EFEEE0">
          <MusicItem url={one} title={'Life in a bubble'} width={'153px'} />
          <MusicItem url={two} title={'Mountain'} width={'153px'} />
          <MusicItem url={three} title={'Limits'} width={'153px'} />
          <MusicItem url={four} title={"Everything's black"} width={'153px'} />
          <MusicItem url={five} title={'Cancelled'} width={'153px'} />
          <MusicItem url={six} title={'Normad'} width={'153px'} />
          <MusicItem url={one} title={'Life in a bubble'} width={'153px'} />
          <MusicItem url={two} title={'Mountain'} width={'153px'} />
          <MusicItem url={three} title={'Limits'} width={'153px'} />
          <MusicItem url={four} title={"Everything's black"} width={'153px'} />
          <MusicItem url={five} title={'Cancelled'} width={'153px'} />
        </HStack>
      </Box>
    </Box>
  );
};

export default MusicList;
