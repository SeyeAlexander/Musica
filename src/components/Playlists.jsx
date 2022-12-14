import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import TunesBanner from "./TunesBanner";
import TunesList from "./TunesList";

const Playlists = ({ onTunePick, onPlayAll }) => {
  return (
    <Box className='bg'>
      <Box className='bg-content'>
        <Box ml={{ base: "0", md: "2" }} pt='80px' mb={{ base: "2", md: "6" }} color='#EFEEE0'>
          <Flex pb='50px'>
            <SideBar />
            <TunesBanner onPlayAll={onPlayAll} />
          </Flex>
        </Box>

        <Box pb={{ base: "90px", md: "120px" }}>
          <TunesList onTunePick={onTunePick} />
        </Box>
      </Box>
    </Box>
  );
};

export default Playlists;
