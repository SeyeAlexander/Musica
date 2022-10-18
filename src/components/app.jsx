import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Playlist from './Playlist';
import Collection from './Collection';

const App = () => {
  return (
    <Router>
      <Box bg="#1E1E1E">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/collections" element={<Collection />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
