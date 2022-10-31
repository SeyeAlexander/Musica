import { VStack } from "@chakra-ui/react";
import songList from "../data/songList";
import TuneItem from "./TuneItem";

const TunesList = () => {
  return (
    <VStack ml={{ base: "0px", md: "100px" }} w={{ base: "full", md: "1150px" }} spacing='10px'>
      {songList.map((song) => (
        <TuneItem song={song} />
      ))}
    </VStack>
  );
};

export default TunesList;
