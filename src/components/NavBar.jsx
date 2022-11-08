import {
  Box,
  HStack,
  Image,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ onSearchSubmit, onSpotifyConnect }) => {
  const [term, setTerm] = useState("");

  const connect = () => {
    onSpotifyConnect();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <Box
      py='4'
      ml={{ base: "0", md: "6" }}
      position='fixed'
      top='0'
      w={{ base: "93%", md: "93%" }}
      bg='#1E1E1E'
      h='60px'
      opacity='0.99'
      zIndex='1'
    >
      <HStack>
        <Flex justify='space-between' w='100%'>
          <HStack>
            <Link to='/'>
              <Image src={Logo} w='34px' />
            </Link>

            <Box w={{ base: "full", md: "25vw" }} pl={{ base: "10px", md: "50px" }}>
              <form onSubmit={handleSubmit}>
                <FormControl color='white'>
                  <InputGroup size='sm'>
                    <InputLeftElement pr='3'>
                      <IconButton
                        colorScheme='whiteAlpha'
                        size='xs'
                        icon={<SearchIcon />}
                        type='submit'
                      />
                    </InputLeftElement>

                    <Input
                      type='text'
                      placeholder='search tracks'
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                      variant='unstyled'
                      h='20px'
                      mt='1'
                    />
                  </InputGroup>
                </FormControl>
              </form>
            </Box>
          </HStack>

          <HStack>
            <Button colorScheme='green' borderRadius='20px' size='sm' onClick={connect}>
              Connect Spotify
            </Button>
          </HStack>
        </Flex>
      </HStack>
    </Box>
  );
};

export default NavBar;
