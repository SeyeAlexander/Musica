import { Box } from "@chakra-ui/react";
import Player from "./Player";
import kulo from "../assets/musiclist/Ku-Lo-Sa.mp3";
import wizzy from "../assets/musiclist/Bad-To-Me.mp3";
import boxy from "../assets/musiclist/Box.mp3";
import intro from "../assets/musiclist/Intro.mp3";
import kiss from "../assets/musiclist/Kiss Me.mp3";
import lost from "../assets/musiclist/lost-souls.mp3";

import { useRef, useState } from "react";

const Audio = () => {
  const audioPlayer = useRef();
  const songList = [
    { id: "123", title: "Bad To Me", artist: "Wizkid", song: `${wizzy}` },
    { id: "234", title: "Ku-Lo-Sa", artist: "Oxlade", song: `${kulo}` },
    { id: "345", title: "Intro", artist: "21 savage", song: `${intro}` },
    { id: "456", title: "Kiss Me More", artist: "Doja", song: `${kiss}` },
    { id: "567", title: "Lost Souls", artist: "Brent Faiyaz", song: `${lost}` },
    { id: "678", title: "The Box", artist: "Roddy Ricch", song: `${boxy}` },
  ];

  const [currentSong, setCurrentSong] = useState(songList[4]);
  const currentIndex = songList.findIndex((song) => song.id === currentSong.id);

  const onAudioPlay = (playBack) => {
    playBack === "play" ? audioPlayer.current.play() : audioPlayer.current.pause();
    console.log(currentSong);
    console.log(currentIndex);
  };

  // const onSkipForward = () => {

  // };

  // const onSkipBack = () => {};

  return (
    <Box>
      <audio ref={audioPlayer} src={currentSong.song} />

      <Player handlePlayBack={onAudioPlay} />
      {/* handleForwardSkip={onSkipForward} handleBackSkip={onSkipBack} */}
    </Box>
  );
};

export default Audio;
