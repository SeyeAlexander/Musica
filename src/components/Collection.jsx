import { Box, Container, Flex } from "@chakra-ui/react";
import GridList from "./GridList";
import NavBar from "./NavBar";
import Player from "./Player";
import SideBar from "./SideBar";

const Collection = () => {
  return (
    <Box>
      <Container maxW='8xl' mx='auto'>
        <NavBar />
        <Box ml='2' pt='80px' mb='6' color='#EFEEE0'>
          <Flex pb='100px'>
            <SideBar />
            <GridList />
          </Flex>
        </Box>

        <Player />
      </Container>
    </Box>
  );
};

export default Collection;
