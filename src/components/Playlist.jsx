import { Box, Container, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Player from "./Player";
import SideBar from "./SideBar";
// import one from "../assets/Lead-image.png";

const Playlist = () => {
  return (
    <Box>
      <Container maxW='8xl' mx='auto'>
        <NavBar />

        <Box ml='2' pt='80px' mb='6' color='#EFEEE0'>
          <Flex pb='100px'>
            <SideBar />
          </Flex>
        </Box>

        <Player />
      </Container>
    </Box>
  );
};

export default Playlist;
