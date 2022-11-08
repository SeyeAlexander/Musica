import { Box, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import spotify from "../api/Spotify";
import Home from "./Home";
import Playlists from "./Playlists";
import Collections from "./Collections";
import NavBar from "./NavBar";
import AudioPlayer from "./AudioPlayer";
import songList from "../data/songList";

const App = () => {
  const [token, setToken] = useState(null);
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [nowPlaying, setNowPlaying] = useState("");
  const [trackList, setTrackList] = useState("");

  const CLIENT_ID = "ffd3c6dfc19d4932ac951a7bfd6074a3";
  // const REDIRECT_URI = "https://master--aesthetic-centaur-30da84.netlify.app/";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

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
    const getTerm = async () => {
      const res = await spotify.get("/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: "black panther",
          type: "track",
          limit: 11,
        },
      });

      setSongs(res.data.tracks.items);
    };

    getTerm();
  }, [token]);

  const handleSpotifyConnect = () => {
    setToken("");
    window.localStorage.removeItem("token");
    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  };

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
    console.log(res.data.tracks.items);
  };

  const handleSongSelection = (songItem) => {
    setNowPlaying(songItem);
    setTrackList(songList);
  };

  const handleSongPick = (song) => {
    setNowPlaying(song);
    setTrackList(songs);
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <Box bg='#1E1E1E'>
        <Container maxW='8xl' mx='auto' overflowX='hidden'>
          <NavBar onSearchSubmit={handleTermSubmit} onSpotifyConnect={handleSpotifyConnect} />

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
                  onSongPick={handleSongPick}
                />
              }
            />
            <Route path='/playlists' element={<Playlists />} />
            <Route path='/collections' element={<Collections />} />
          </Routes>

          <AudioPlayer nowPlaying={nowPlaying} trackList={trackList} />
        </Container>
      </Box>
    </Router>
  );
};

export default App;
