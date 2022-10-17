import { Box, Text } from '@chakra-ui/react';

const Banner = ({ banner }) => {
  return (
    <Box ml="100px" my="4">
      <Text fontSize="lg" fontWeight="700" color="#EFEEE0">
        {banner}
      </Text>
    </Box>
  );
};

export default Banner;
