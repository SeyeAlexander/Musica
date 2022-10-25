import { HStack, Box } from "@chakra-ui/react";
import MusicItem from "./MusicItem";
import one from "../assets/Rectangle 14.png";
import two from "../assets/Rectangle 14 (1).png";
import three from "../assets/Rectangle 14 (2).png";
import four from "../assets/Rectangle 14 (3).png";
import five from "../assets/Rectangle 14 (4).png";
import six from "../assets/Rectangle 14 (5).png";

const MusicList = ({ reference }) => {
  return (
    <Box ml={{ base: "0px", md: "95px" }}>
      <Box className='overflow' overflowY='hidden' w='100%' h={{ base: "140px", md: "200px" }}>
        <HStack spacing={{ base: "4", md: "7" }} pb='5' w='2200px' color='#EFEEE0'>
          <MusicItem url={one} title={"Life in a bubble"} />
          <MusicItem url={two} title={"Mountain"} />
          <MusicItem url={three} title={"Limits"} />
          <MusicItem url={four} title={"Everything's black"} />
          <MusicItem url={five} title={"Cancelled"} />
          <MusicItem url={six} title={"Normad"} />
          <MusicItem url={one} title={"Life in a bubble"} />
          <MusicItem url={two} title={"Mountain"} />
          <MusicItem url={three} title={"Limits"} />
          <MusicItem url={four} title={"Everything's black"} />
          <MusicItem url={five} title={"Cancelled"} />
        </HStack>
      </Box>
    </Box>
  );
};

export default MusicList;
