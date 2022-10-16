import { Box, Container } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import MusicList from "./MusicList";
import Player from "./Player";
import Audio from "./Audio";

const Home = () => {
  return (
    <Container maxW='8xl' mx='auto' position='relative'>
      <NavBar />
      <HeroSection />
      {/* <Audio /> */}
      <MusicList banner={"Made for Seye"} />
      <MusicList banner={"New releases"} />
      <Box pb='100px'>
        <MusicList banner={"Popular around you"} />
      </Box>
      <Player />
    </Container>
  );
};

export default Home;
