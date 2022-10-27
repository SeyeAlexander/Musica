import { Box, Flex } from "@chakra-ui/react";
import GridList from "./GridList";
import SideBar from "./SideBar";

const Collections = () => {
  return (
    <Box>
      <Box
        ml={{ base: "0", md: "2" }}
        pt={{ base: "5", md: "8px" }}
        mb={{ base: "2", md: "6" }}
        color='#EFEEE0'
      >
        <Flex pb={{ base: "20px", md: "100px" }}>
          <SideBar />
          <GridList />
        </Flex>
      </Box>
    </Box>
  );
};

export default Collections;
