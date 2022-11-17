import { Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

const SongItem = ({ songItem, onSongSelect }) => {
  const count = useBreakpointValue({
    base: "12",
    md: "22",
  });

  const songTitle = songItem.name.slice(0, count) + (songItem.name.length > count ? ".." : "");

  const handleSelect = () => {
    onSongSelect(songItem);
  };

  return (
    <VStack className='zoom' spacing={2} align='flexStart' pt={2} onClick={handleSelect}>
      <Image
        src={songItem.album.images[0].url}
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

export default SongItem;
