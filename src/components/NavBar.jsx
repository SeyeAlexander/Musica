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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ onSearchSubmit }) => {
  const CLIENT_ID = "ffd3c6dfc19d4932ac951a7bfd6074a3";
  const REDIRECT_URI = "https://master--aesthetic-centaur-30da84.netlify.app/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <Box
      py='4'
      ml={{ base: "0", md: "6" }}
      position='fixed'
      w='100%'
      top='0'
      bg='#1E1E1E'
      h='60px'
      opacity='0.99'
      zIndex='1'
    >
      <HStack spacing='5vw'>
        <Link to='/'>
          <Image src={Logo} w='34px' />
        </Link>

        <Box w='25vw'>
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

        <Box pl={{ base: "15vw", md: "45vw" }}>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <Button colorScheme='green' borderRadius='20px' size='sm'>
              Connect Spotify
            </Button>
          </a>
        </Box>
      </HStack>
    </Box>
  );
};

export default NavBar;
