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
  // const CLIENT_ID = "ffd3c6dfc19d4932ac951a7bfd6074a3";
  // // const REDIRECT_URI = "https://master--aesthetic-centaur-30da84.netlify.app/";
  // const REDIRECT_URI = "http://localhost:3000/";
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  // const RESPONSE_TYPE = "token";

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
      w='1220px'
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

            <Box w='25vw' pl='70px'>
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
            {/* <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              <Button colorScheme='green' borderRadius='20px' size='sm'>
                Connect Spotify
              </Button>
            </a> */}
          </HStack>
        </Flex>
      </HStack>
    </Box>
  );
};

export default NavBar;
