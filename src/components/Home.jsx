import { Box, Container } from '@chakra-ui/react';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import MusicList from './MusicList';
import Player from './Player';

const Home = () => {
  return (
    <Container maxW="8xl" mx="auto" position="relative">
      <NavBar />
      <HeroSection />
      <MusicList banner={'Made for Seye'} />
      <MusicList banner={'New releases'} />
      <Box pb="150px">
        <MusicList banner={'Popular around you'} />
      </Box>
      <Player />
    </Container>
  );
};

export default Home;
