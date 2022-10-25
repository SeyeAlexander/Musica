import { Box, Text } from "@chakra-ui/react";

const Banner = ({ banner }) => {
  return (
    <Box ml={{ base: "0px", md: "100px" }} my={{ base: "2", md: "4" }}>
      <Text fontSize={{ base: "18px", md: "lg" }} fontWeight='700' color='#EFEEE0'>
        {banner}
      </Text>
    </Box>
  );
};

export default Banner;
