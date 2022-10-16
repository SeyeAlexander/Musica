import { Flex, VStack, Text, HStack, Box } from "@chakra-ui/react";
import ReleaseItem from "./ReleaseItem";
import one from "../assets/Rectangle 14.png";
import two from "../assets/Rectangle 14 (1).png";
import three from "../assets/Rectangle 14 (2).png";
import four from "../assets/Rectangle 14 (3).png";
import five from "../assets/Rectangle 14 (4).png";
import six from "../assets/Rectangle 14 (5).png";

const NewRelease = () => {
  return (
    <Box ml='6vw'>
      <Box overflowY='hidden' over w='100%' h='50vh'>
        <Flex p='3'>
          <VStack color='#EFEEE0' spacing={3} align='flexStart'>
            <Text fontSize='lg' fontWeight='medium'>
              New releases.
            </Text>

            {/*When fetching data from an api or sourcing locally,keep list to 15 items
            because of HStack width, so the album arts don't shrink from prefered size */}
            <HStack spacing='7' pb='5' w='200vw'>
              <ReleaseItem url={one} title={"Life in a bubble"} />
              <ReleaseItem url={two} title={"Life in a bubble"} />
              <ReleaseItem url={three} title={"Life in a bubble"} />
              <ReleaseItem url={four} title={"Life in a bubble"} />
              <ReleaseItem url={five} title={"Life in a bubble"} />
              <ReleaseItem url={six} title={"Life in a bubble"} />
              <ReleaseItem url={one} title={"Life in a bubble"} />
              <ReleaseItem url={two} title={"Life in a bubble"} />
              <ReleaseItem url={three} title={"Life in a bubble"} />
              <ReleaseItem url={four} title={"Life in a bubble"} />
              <ReleaseItem url={five} title={"Life in a bubble"} />
              <ReleaseItem url={six} title={"Life in a bubble"} />
              <ReleaseItem url={one} title={"Life in a bubble"} />
              <ReleaseItem url={two} title={"Life in a bubble"} />
              <ReleaseItem url={three} title={"Life in a bubble"} />
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewRelease;
