import { Flex, Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import VolIcon from "../assets/volume-high.svg";
import ShuffleIcon from "../assets/shuffle.svg";
import PreviousIcon from "../assets/previous.svg";
import PlayIcon from "../assets/VectorP.svg";
import PauseIcon from "../assets/pause.png";
import NextIcon from "../assets/next.svg";
import RepeatIcon from "../assets/repeate-one.svg";
import songList from "../data/songList";
import heartIcon from "../assets/Heart.png";
import { useEffect, useRef, useState } from "react";

const AudioPlayer = ({ nowPlaying, trackList }) => {
  const audioPlay = useRef();

  const [songsList, setSongsList] = useState(songList);

  const [currentSong, setCurrentSong] = useState(songsList[0]);
  const [playBack, setPlayBack] = useState("play");
  const [loopPlayBack, setLoopPlayBack] = useState("yeah");
  const [shufflePlay, setShufflePlay] = useState("yeah");
  const [val, setVal] = useState(0);
  const [vol, setVol] = useState(60);
  const [isMute, setIsMute] = useState("yeah");
  const [duration, setDuration] = useState(0);
  const [icon, setIcon] = useState(PlayIcon);
  const currentIndex = songsList.findIndex((song) => song.id === currentSong.id);

  var count = 13;
  const songTitle =
    currentSong.name.slice(0, count) + (currentSong.name.length > count ? ".." : "");

  const playBackPercentage = duration
    ? `${(audioPlay.current.currentTime / duration) * 100}%`
    : "0%";
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
  });

  useEffect(() => {
    if (audioPlay.current.ended) {
      skipForward();
    } else {
      playBack === "pause" ? audioPlay.current.play() : audioPlay.current.pause();
    }
  });

  useEffect(() => {
    if (trackList) {
      setSongsList(trackList);
    }
  }, [trackList]);

  useEffect(() => {
    if (nowPlaying) {
      setCurrentSong(nowPlaying);
      audioPlay.current.play();
      setPlayBack("pause");
      setIcon(PauseIcon);
    }
  }, [nowPlaying]);

  const handlePlay = () => {
    playBack === "play" ? audioPlay.current.play() : audioPlay.current.pause();
    playBack === "pause" ? setPlayBack("play") : setPlayBack("pause");
    playBack === "pause" ? setIcon(PlayIcon) : setIcon(PauseIcon);
  };

  const skipForward = async () => {
    await setCurrentSong(songsList[(currentIndex + 1) % songsList.length]);
    audioPlay.current.play();
    setPlayBack("pause");
    setIcon(PauseIcon);
  };

  const skipBack = async () => {
    (currentIndex - 1) % songsList.length === -1
      ? await setCurrentSong(songsList[songsList.length - 1])
      : await setCurrentSong(songsList[(currentIndex - 1) % songsList.length]);
    audioPlay.current.play();
    setPlayBack("pause");
    setIcon(PauseIcon);
  };

  const shuffle = async () => {
    const shuffleList = (arr) => {
      if (arr.length === 1) return arr;
      const rand = Math.floor(Math.random() * arr.length);
      const item = arr[rand];
      console.log(item);
      return item;
    };

    await setCurrentSong(shuffleList(songsList));
    shufflePlay === "nah" ? setShufflePlay("yeah") : setShufflePlay("nah");
    audioPlay.current.play();
    setPlayBack("pause");
  };

  const seek = (e) => {
    audioPlay.current.currentTime = e.target.value;
    setVal(e.target.value);
  };

  const loopPlay = () => {
    loopPlayBack === "yeah" ? (audioPlay.current.loop = true) : (audioPlay.current.loop = false);
    loopPlayBack === "nah" ? setLoopPlayBack("yeah") : setLoopPlayBack("nah");
  };

  const handleVolume = (e) => {
    audioPlay.current.volume = e.target.value / 100;
    setVol(e.target.value);
  };

  const mute = () => {
    isMute === "yeah" ? (audioPlay.current.muted = true) : (audioPlay.current.muted = false);
    isMute === "nah" ? setIsMute("yeah") : setIsMute("nah");
  };

  return (
    <Box>
      {/* mobile player */}
      <Box
        display={{ base: "block", md: "none" }}
        position='fixed'
        bottom='0'
        bg='#1E1E1E'
        w='92%'
        h='80px'
        py='2'
      >
        <audio ref={audioPlay} src={currentSong.preview_url} />

        <Flex color='#EFEEE0' align='center'>
          <HStack w='17%'>
            <Image
              src={currentSong.album.images[0].url}
              w='50px'
              h='50px'
              borderRadius='5px'
            ></Image>
          </HStack>

          <VStack w='61%' align='flexStart' spacing={0}>
            <Text fontSize='14px'>{songTitle}</Text>
            <Text fontSize='12px' color='gray.300'>
              {currentSong.album.artists[0].name}
            </Text>
          </VStack>

          <HStack w='10%'>
            <Image src={heartIcon} h='20px' />
          </HStack>

          <Box w='12%' pl='6px' onClick={handlePlay}>
            <Image src={icon} w='23px' />
          </Box>
        </Flex>

        <Box id='volume'>
          <input
            type='range'
            value={val}
            style={{ width: "92vw", height: "3px", background: trackStyling }}
          />
        </Box>
      </Box>

      {/* Desktop player */}
      <Box
        display={{ base: "none", md: "block" }}
        position='fixed'
        bottom='0'
        bg='#1E1E1E'
        /* previous player width is 1410px/1330  */
        // w='1250px' test on bigger screens if this doesnt break
        w='1430px'
        h='90px'
        opacity='0.99'
      >
        <audio ref={audioPlay} src={currentSong.preview_url} />

        <Flex color='#EFEEE0' ml='95px' h='full'>
          <HStack w='5%'>
            <Image src={currentSong.album.images[0].url} w='49px' h='49px' borderRadius='14px' />
          </HStack>

          <VStack w='8%' align='flexStart' spacing={0} mt={5} p={0}>
            <Text fontSize='14px'>{songTitle}</Text>
            <Text fontSize='10px'>{currentSong.album.artists[0].name}</Text>
          </VStack>

          <VStack w='63%' py={4} px={6} spacing={1}>
            <HStack spacing='53px'>
              <Box onClick={shuffle} boxShadow='xs' className='zoomIcon'>
                <Image src={ShuffleIcon} w='18px' />
              </Box>

              <Box onClick={skipBack} className='zoomIcon'>
                <Image src={PreviousIcon} w='18px' />
              </Box>

              <Box onClick={handlePlay} className='zoomIcon'>
                <Image
                  src={icon}
                  borderRadius='50%'
                  w='38px'
                  h='38px'
                  bg='yellow.400'
                  p='3'
                  color='#EFEEE0'
                />
              </Box>

              <Box onClick={skipForward} className='zoomIcon'>
                <Image src={NextIcon} w='18px' />
              </Box>

              <Box onClick={loopPlay} className='zoomIcon'>
                <Image src={RepeatIcon} w='18px' />
              </Box>
            </HStack>

            <Box id='seek'>
              <input
                type='range'
                min={0}
                max={`${duration}`}
                value={val}
                onChange={seek}
                style={{ width: "700px", background: trackStyling }}
              />
            </Box>
          </VStack>

          <VStack w='24%' py={5} mt='2' align='flexStart'>
            <HStack>
              <Box onClick={mute} pt='2'>
                <Image src={VolIcon} w='18px' />
              </Box>
              <Box id='volume'>
                <input
                  type='range'
                  value={vol}
                  onChange={handleVolume}
                  style={{ width: "100px", height: "4px", background: volumeStyling }}
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
