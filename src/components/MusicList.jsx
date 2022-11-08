import { HStack, Box } from "@chakra-ui/react";
import SongResult from "./SongResult";
import SongItem from "./SongItem";
import ReleaseItem from "./ReleaseItem";
import React from "react";

const MusicList = ({ newReleases, songs, onSongPick, songList, onSongSelect }) => {
  return (
    <Box ml={{ base: "0px", md: "95px" }}>
      <Box className='overflow' overflowY='hidden' w='100%' h={{ base: "150px", md: "200px" }}>
        <HStack spacing={{ base: "4", md: "7" }} pb='5' w='2200px' color='#EFEEE0'>
          {songs &&
            songs.map((song) => (
              <React.Fragment key={song.id}>
                <SongResult song={song} onSongPick={onSongPick} />
              </React.Fragment>
            ))}

          {songList &&
            songList.map((songItem) => (
              <React.Fragment key={songItem.id}>
                <SongItem songItem={songItem} onSongSelect={onSongSelect} />
              </React.Fragment>
            ))}

          {newReleases &&
            newReleases.map((releaseItem) => (
              <React.Fragment key={releaseItem.id}>
                <ReleaseItem releaseItem={releaseItem} />
              </React.Fragment>
            ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default MusicList;
