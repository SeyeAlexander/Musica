import { HStack, Box } from "@chakra-ui/react";
import SongResult from "./SongResult";
import SongItem from "./SongItem";
import ReleaseItem from "./ReleaseItem";

const MusicList = ({ newReleases, songs, songList, onSongSelect }) => {
  return (
    <Box ml={{ base: "0px", md: "95px" }}>
      <Box className='overflow' overflowY='hidden' w='100%' h={{ base: "150px", md: "200px" }}>
        <HStack spacing={{ base: "4", md: "7" }} pb='5' w='2200px' color='#EFEEE0'>
          {songs && songs.map((song) => <SongResult song={song} />)}

          {songList &&
            songList.map((songItem) => (
              <SongItem songItem={songItem} onSongSelect={onSongSelect} />
            ))}

          {newReleases &&
            newReleases.map((releaseItem) => <ReleaseItem releaseItem={releaseItem} />)}
        </HStack>
      </Box>
    </Box>
  );
};

export default MusicList;
