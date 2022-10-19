import { Box, Flex } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
// import NavBar from "./NavBar";
import MusicList from "./MusicList";
import SideBar from "./SideBar";
import Banner from "./Banner";

const Home = () => {
  return (
    <Box>
      {/* <NavBar /> */}

      <Box ml='2' pt='80px' mb='6' color='#EFEEE0'>
        <Flex>
          <SideBar />
          <HeroSection />
        </Flex>
      </Box>

      <Box pb='120px'>
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
