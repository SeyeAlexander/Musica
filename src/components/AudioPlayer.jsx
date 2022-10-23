import { Flex, Box, Image, Text, VStack, HStack } from '@chakra-ui/react';
import albumArt from '../assets/Rectangle 26.png';
import VolIcon from '../assets/volume-high.svg';
import ShuffleIcon from '../assets/shuffle.svg';
import PreviousIcon from '../assets/previous.svg';
import PlayIcon from '../assets/VectorP.svg';
import NextIcon from '../assets/next.svg';
import RepeatIcon from '../assets/repeate-one.svg';
import kulo from '../assets/musiclist/Ku-Lo-Sa.mp3';
import wizzy from '../assets/musiclist/Bad-To-Me.mp3';
import boxy from '../assets/musiclist/Box.mp3';
import tierra from '../assets/musiclist/tierra.mp3';
import kiss from '../assets/musiclist/Kiss Me.mp3';
import lost from '../assets/musiclist/lost-souls.mp3';
import { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioPlay = useRef();

  const songList = [
    { id: '123', title: 'Bad To Me', artist: 'Wizkid', song: `${wizzy}` },
    { id: '234', title: 'Ku-Lo-Sa', artist: 'Oxlade', song: `${kulo}` },
    { id: '345', title: 'Intro', artist: '21 savage', song: `${tierra}` },
    { id: '456', title: 'Kiss Me More', artist: 'Doja', song: `${kiss}` },
    { id: '567', title: 'Lost Souls', artist: 'Brent Faiyaz', song: `${lost}` },
    { id: '678', title: 'The Box', artist: 'Roddy Ricch', song: `${boxy}` },
  ];

  const [currentSong, setCurrentSong] = useState(songList[1]);
  const [playBack, setPlayBack] = useState('play');
  const [loopPlayBack, setLoopPlayBack] = useState('yeah');
  const [shufflePlay, setShufflePlay] = useState('yeah');
  const [val, setVal] = useState(0);
  const [vol, setVol] = useState(60);
  const [isMute, setIsMute] = useState('yeah');
  const [duration, setDuration] = useState(0);
  const currentIndex = songList.findIndex((song) => song.id === currentSong.id);

  const playBackPercentage = duration
    ? `${(audioPlay.current.currentTime / duration) * 100}%`
    : '0%';
  const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${playBackPercentage}, #D4B544), 
  color-stop(${playBackPercentage}, rgba(255, 255, 255, 0.6)))`;

  const volumePercentage = `${vol}%`;
  const volumeStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volumePercentage}, #D4B544), 
  color-stop(${volumePercentage}, rgba(255, 255, 255, 0.6)))`;

  useEffect(() => {
    setInterval(() => {
      setDuration(audioPlay.current.duration);
      setVal(audioPlay.current.currentTime);
    }, 1000);
  }, []);

  useEffect(() => {
    if (audioPlay.current.ended) {
      skipForward();
    } else {
      playBack === 'pause'
        ? audioPlay.current.play()
        : audioPlay.current.pause();
    }
  });

  const handlePlay = () => {
    playBack === 'play' ? audioPlay.current.play() : audioPlay.current.pause();
    playBack === 'pause' ? setPlayBack('play') : setPlayBack('pause');
  };

  const skipForward = async () => {
    await setCurrentSong(songList[(currentIndex + 1) % songList.length]);
    audioPlay.current.play();
    setPlayBack('pause');
    setVal(0);
  };

  const skipBack = async () => {
    (currentIndex - 1) % songList.length === -1
      ? await setCurrentSong(songList[songList.length - 1])
      : await setCurrentSong(songList[(currentIndex - 1) % songList.length]);
    audioPlay.current.play();
    setPlayBack('pause');
    setVal(0);
  };

  const shuffle = async () => {
    const shuffleList = (arr) => {
      if (arr.length === 1) return arr;
      const rand = Math.floor(Math.random() * arr.length);
      const item = arr[rand];
      console.log(item);
      return item;
    };

    await setCurrentSong(shuffleList(songList));
    shufflePlay === 'nah' ? setShufflePlay('yeah') : setShufflePlay('nah');
    audioPlay.current.play();
    setPlayBack('pause');
    setVal(0);
  };

  const seek = (e) => {
    audioPlay.current.currentTime = e.target.value;
    setVal(e.target.value);
  };

  const loopPlay = () => {
    loopPlayBack === 'yeah'
      ? (audioPlay.current.loop = true)
      : (audioPlay.current.loop = false);
    loopPlayBack === 'nah' ? setLoopPlayBack('yeah') : setLoopPlayBack('nah');
  };

  const handleVolume = (e) => {
    audioPlay.current.volume = e.target.value / 100;
    setVol(e.target.value);
  };

  const mute = () => {
    isMute === 'yeah'
      ? (audioPlay.current.muted = true)
      : (audioPlay.current.muted = false);
    isMute === 'nah' ? setIsMute('yeah') : setIsMute('nah');
  };

  return (
    <Box>
      <audio ref={audioPlay} src={currentSong.song} />

      <Box position="fixed" bottom="0" bg="#1E1E1E" w="1410px" h="90px">
        <Flex color="#EFEEE0" bg="#1E1E1E" opacity="0.9" ml="95px">
          <HStack w="5%">
            <Image src={albumArt} w="49px" borderRadius="14px"></Image>
          </HStack>

          <VStack w="8%" align="flexStart" spacing={0} mt={5} p={0}>
            <Text fontSize="14px">Seasons in</Text>
            <Text fontSize="10px">James</Text>
          </VStack>

          <VStack w="63%" py={4} px={6} spacing={1}>
            <HStack spacing="53px">
              <Box onClick={shuffle}>
                <Image src={ShuffleIcon} w="18px" />
              </Box>

              <Box onClick={skipBack}>
                <Image src={PreviousIcon} w="18px" />
              </Box>

              <Box onClick={handlePlay}>
                <Image
                  src={PlayIcon}
                  borderRadius="50%"
                  w="100%"
                  h="100%"
                  bg="yellow.400"
                  p="3"
                  color="#EFEEE0"
                />
              </Box>

              <Box onClick={skipForward}>
                <Image src={NextIcon} w="18px" />
              </Box>

              <Box onClick={loopPlay}>
                <Image src={RepeatIcon} w="18px" />
              </Box>
            </HStack>

            <Box>
              <input
                type="range"
                min={0}
                max={`${duration}`}
                value={val}
                onChange={seek}
                style={{ width: '700px', background: trackStyling }}
              />
            </Box>
          </VStack>

          <VStack w="24%" py={5} px={2} mt="2" align="flexStart">
            <HStack>
              <Box onClick={mute}>
                <Image src={VolIcon} w="18px" />
              </Box>
              <Box>
                <input
                  type="range"
                  value={vol}
                  onChange={handleVolume}
                  style={{ width: '200px', background: volumeStyling }}
                />
              </Box>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
