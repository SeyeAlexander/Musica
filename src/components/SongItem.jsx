import { Image, Text, VStack } from "@chakra-ui/react";

const SongItem = ({ songItem, onSongSelect }) => {
  const handleSelect = () => {
    onSongSelect(songItem);
  };

  return (
    <VStack
      className='zoom'
      key={songItem.id}
      spacing={2}
      align='flexStart'
      pt={2}
      onClick={handleSelect}
    >
      <Image
        src={songItem.art}
        w={{ base: "100px", md: "150px" }}
        h={{ base: "105px", md: "155px" }}
        borderRadius='10px'
      />
      <Text fontSize='12px' fontWeight='thin' w={{ base: "100px", md: "150px" }}>
        {songItem.title}
      </Text>
    </VStack>
  );
};

export default SongItem;
