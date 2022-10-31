import { Box, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import spotify from "../api/Spotify";
import Home from "./Home";
import Playlists from "./Playlists";
import Collections from "./Collections";
import NavBar from "./NavBar";
import AudioPlayer from "./AudioPlayer";

const App = () => {
  const [token, setToken] = useState(null);
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [nowPlaying, setNowPlaying] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, [token]);

  useEffect(() => {
    const getPlaylists = async () => {
      const res = await spotify.get("/browse/featured-playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 3,
        },
      });

      setPlaylists(res.data.playlists.items);
    };

    const getNewReleases = async () => {
      const { data } = await spotify.get("/browse/new-releases", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 11,
        },
      });

      setNewReleases(data.albums.items);
    };

    getPlaylists();
    getNewReleases();
  }, [token]);

  useEffect(() => {
    handleTermSubmit("asake");
    // eslint-disable-next-line
  }, []);

  const handleTermSubmit = async (term) => {
    const res = await spotify.get("/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: term,
        type: "track",
        limit: 11,
      },
    });

    setSongs(res.data.tracks.items);
  };

  const handleSongSelection = (songItem) => {
    setNowPlaying(songItem.song);
    console.log(songItem);
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <Box bg='#1E1E1E'>
        <Container maxW='8xl' mx='auto' overflowX='hidden'>
          <NavBar onSearchSubmit={handleTermSubmit} />

          <Routes>
            <Route
              path='/'
              element={
                <Home
                  logoutUser={logout}
                  playlists={playlists}
                  songs={songs}
                  newReleases={newReleases}
                  onSongSelect={handleSongSelection}
                />
              }
            />
            <Route path='/playlists' element={<Playlists />} />
            <Route path='/collections' element={<Collections />} />
          </Routes>

          <AudioPlayer nowPlaying={nowPlaying} />
        </Container>
      </Box>
    </Router>
  );
};

export default App;
