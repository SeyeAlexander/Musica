import { Box, Flex } from '@chakra-ui/react';
// import NavBar from "./NavBar";
import SideBar from './SideBar';
import TunesBanner from './TunesBanner';
import TunesList from './TunesList';

const Playlist = () => {
  return (
    <Box>
      <Box ml="2" pt="80px" mb="6" color="#EFEEE0">
        <Flex pb="50px">
          <SideBar />
          <TunesBanner />
        </Flex>
      </Box>

      <Box pb="150px">
        <TunesList />
      </Box>
    </Box>
  );
};

export default Playlist;
