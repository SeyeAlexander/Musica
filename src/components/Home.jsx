import { Container } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import NewRelease from "./NewRelease";
import Player from "./Player";

const Home = () => {
  return (
    <Container maxW='8xl' mx='auto'>
      <NavBar />
      <HeroSection />
      <NewRelease />
      <Player />
    </Container>
  );
};

export default Home;
