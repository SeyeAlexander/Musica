import { VStack } from "@chakra-ui/react";
import React from "react";
import songList from "../data/songList";
import TuneItem from "./TuneItem";

const TunesList = ({ onTunePick }) => {
  return (
    <VStack ml={{ base: "0px", md: "100px" }} w={{ base: "full", md: "1150px" }} spacing='10px'>
      {songList.map((song) => (
        <React.Fragment key={song.id}>
          <TuneItem song={song} onTunePick={onTunePick} />
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default TunesList;
