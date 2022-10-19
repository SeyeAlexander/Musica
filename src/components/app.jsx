import { Box, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Playlist from "./Playlist";
import Collection from "./Collection";
import Audio from "./Audio";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <Box bg='#1E1E1E'>
        <Container maxW='8xl' mx='auto'>
          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/playlists' element={<Playlist />} />
            <Route path='/collections' element={<Collection />} />
          </Routes>

          <Audio />
        </Container>
      </Box>
    </Router>
  );
};

export default App;
