import { Flex, Box, Image, Text, VStack, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Progress } from "@chakra-ui/react";
import albumArt from "../assets/Rectangle 26.png";
import VolIcon from "../assets/volume-high.svg";
import ShuffleIcon from "../assets/shuffle.svg";
import PreviousIcon from "../assets/previous.svg";
import PlayIcon from "../assets/VectorP.svg";
import NextIcon from "../assets/next.svg";
import RepeatIcon from "../assets/repeate-one.svg";
import kulo from "../assets/musiclist/Ku-Lo-Sa.mp3";
import wizzy from "../assets/musiclist/Bad-To-Me.mp3";
import boxy from "../assets/musiclist/Box.mp3";
import tierra from "../assets/musiclist/tierra.mp3";
import kiss from "../assets/musiclist/Kiss Me.mp3";
import lost from "../assets/musiclist/lost-souls.mp3";
import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioPlay = useRef();
  const seekBar = useRef();

  const songList = [
    { id: "123", title: "Bad To Me", artist: "Wizkid", song: `${wizzy}` },
    { id: "234", title: "Ku-Lo-Sa", artist: "Oxlade", song: `${kulo}` },
    { id: "345", title: "Intro", artist: "21 savage", song: `${tierra}` },
    { id: "456", title: "Kiss Me More", artist: "Doja", song: `${kiss}` },
    { id: "567", title: "Lost Souls", artist: "Brent Faiyaz", song: `${lost}` },
    { id: "678", title: "The Box", artist: "Roddy Ricch", song: `${boxy}` },
  ];

  const [currentSong, setCurrentSong] = useState(songList[1]);
  const [playBack, setPlayBack] = useState("play");
  const [loopPlayBack, setLoopPlayBack] = useState("yeah");
  const [val, setVal] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentIndex = songList.findIndex((song) => song.id === currentSong.id);

  const funct = async () => {
    await setDuration(audioPlay.current.duration);
  };

  const handlePlay = () => {
    playBack === "play" ? audioPlay.current.play() : audioPlay.current.pause();
    playBack === "pause" ? setPlayBack("play") : setPlayBack("pause");
    funct();
  };

  const skipForward = async () => {
    await setCurrentSong(songList[(currentIndex + 1) % songList.length]);
    audioPlay.current.play();
    setPlayBack("pause");
    funct();
  };

  const skipBack = async () => {
    (currentIndex - 1) % songList.length === -1
      ? await setCurrentSong(songList[songList.length - 1])
      : await setCurrentSong(songList[(currentIndex - 1) % songList.length]);
    audioPlay.current.play();
    setPlayBack("pause");
  };

  const loopPlay = () => {
    loopPlayBack === "yeah" ? (audioPlay.current.loop = true) : (audioPlay.current.loop = false);
    loopPlayBack === "nah" ? setLoopPlayBack("yeah") : setLoopPlayBack("nah");
  };

  const onScrub = (e) => {
    audioPlay.current.currentTime = e.target.value;
    setVal(audioPlay.current.currentTime);
  };

  return (
    <Box>
      <audio ref={audioPlay} src={currentSong.song} />

      <Box position='fixed' bottom='0' bg='#1E1E1E' w='1410px' h='90px'>
        <Flex color='#EFEEE0' bg='#1E1E1E' opacity='0.99' ml='95px'>
          <HStack w='5%'>
            <Image src={albumArt} w='49px' borderRadius='14px'></Image>
          </HStack>

          <VStack w='8%' align='flexStart' spacing={0} mt={5} p={0}>
            <Text fontSize='14px'>Seasons in</Text>
            <Text fontSize='10px'>James</Text>
          </VStack>

          <VStack w='63%' py={4} px={6} spacing={4}>
            <HStack spacing='53px'>
              <Box>
                <Image src={ShuffleIcon} w='18px' />
              </Box>

              <Box onClick={skipBack}>
                <Image src={PreviousIcon} w='18px' />
              </Box>

              <Box onClick={handlePlay}>
                <Image src={PlayIcon} borderRadius='50%' w='100%' h='100%' bg='yellow.400' p='3' color='#EFEEE0' />
              </Box>

              <Box onClick={skipForward}>
                <Image src={NextIcon} w='18px' />
              </Box>

              <Box onClick={loopPlay}>
                <Image src={RepeatIcon} w='18px' />
              </Box>
            </HStack>

            <Box>
              <input type='range' ref={seekBar} step='1' min='0' max={duration ? duration : `${duration}`} value={val} onChange={onScrub} />
            </Box>

            {/* <Slider ref={seekBar} colorScheme='yellow' defaultValue={val} onClick={handleSeekChange}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider> */}
          </VStack>

          <VStack w='24%' py={5} px={2} mt='5' align='flexStart'>
            <HStack>
              <Image src={VolIcon} w='18px' />
              <Progress value={70} size='xs' w='40%' borderRadius='2px' colorScheme='yellow' />
            </HStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
