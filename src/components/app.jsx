import { Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Playlist from './Playlist';
import Collection from './Collection';
import Player from './Player';
import song from '../assets/Buju-BNXN-In-My-Mind-(JustNaija.com).mp3';
import { useRef, useState } from 'react';

const App = () => {
  const audioPlayer = useRef();
  const [newPlaybackState, setNewPlaybackState] = useState('');

  const onAudioPlay = (playBack) => {
    setNewPlaybackState(playBack);
    console.log(newPlaybackState);
    newPlaybackState === 'pause'
      ? audioPlayer.current.play()
      : audioPlayer.current.pause();
  };

  return (
    <Router>
      <Box bg="#1E1E1E">
        <Container maxW="8xl" mx="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlists" element={<Playlist />} />
            <Route path="/collections" element={<Collection />} />
          </Routes>

          <audio ref={audioPlayer} src={song} />

          <Player handlePlayBack={onAudioPlay} />
        </Container>
      </Box>
    </Router>
  );
};

export default App;
