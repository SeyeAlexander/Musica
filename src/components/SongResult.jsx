import { Image, Text, VStack } from "@chakra-ui/react";

const SongResult = ({ song, onSongPick }) => {
  var count = 24;
  const songTitle = song.name.slice(0, count) + (song.name.length > count ? ".." : "");

  const handleSelect = () => {
    onSongPick(song);
  };

  return (
    <VStack className='zoom' spacing={2} align='flexStart' pt={2} onClick={handleSelect}>
      <Image
        src={song.album.images[0].url}
        w={{ base: "100px", md: "150px" }}
        h={{ base: "105px", md: "155px" }}
        borderRadius='10px'
      />
      <Text fontSize='12px' fontWeight='thin' w={{ base: "100px", md: "150px" }}>
        {songTitle}
      </Text>
    </VStack>
  );
};

export default SongResult;
