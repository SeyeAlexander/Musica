import { Box, Flex } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import MusicList from "./MusicList";
import SideBar from "./SideBar";
import Banner from "./Banner";

const Home = () => {
  return (
    <Box>
      <Box ml={{ base: "0", md: "2" }} pt={{ base: "5", md: "8px" }} mb='6' color='#EFEEE0'>
        <Flex>
          <SideBar />
          <HeroSection />
        </Flex>
      </Box>

      <Box pb={{ base: "5px", md: "120px" }}>
        <Banner banner={"Made for Seye"} />
        <MusicList />

        <Banner banner={"New releases"} />
        <MusicList />

        <Banner banner={"Popular around you"} />
        <MusicList />
      </Box>
    </Box>
  );
};

export default Home;
