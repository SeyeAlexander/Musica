import { Box, Flex } from '@chakra-ui/react';
import GridList from './GridList';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Collection = () => {
  return (
    <Box>
      {/* <Container maxW="8xl" mx="auto"> */}
      <NavBar />
      <Box ml="2" pt="80px" mb="6" color="#EFEEE0">
        <Flex pb="100px">
          <SideBar />
          <GridList />
        </Flex>
      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default Collection;
