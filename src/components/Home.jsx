import { Box, Flex } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import MusicList from "./MusicList";
import SideBar from "./SideBar";
import Banner from "./Banner";
import songList from "../data/songList";

const Home = ({ logoutUser, playlists, songs, newReleases, onSongSelect }) => {
  return (
    <Box>
      <Box ml={{ base: "0", md: "2" }} pt='80px' mb='6' color='#EFEEE0'>
        <Flex>
          <SideBar logoutUser={logoutUser} />
          {playlists.length > 0 && <HeroSection playlists={playlists} />}
        </Flex>
      </Box>

      <Box pb={{ base: "90px", md: "120px" }}>
        {songs.length > 0 && <Banner banner={"Your search"} />}
        {songs.length > 0 && <MusicList songs={songs} />}

        <Banner banner={"Made for Seye"} />
        <MusicList songList={songList} onSongSelect={onSongSelect} />

        {newReleases.length > 0 && <Banner banner={"New releases"} />}
        {newReleases.length > 0 && <MusicList newReleases={newReleases} />}
      </Box>
    </Box>
  );
};

export default Home;
