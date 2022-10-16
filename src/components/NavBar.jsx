import { Box, HStack, Image, FormControl, Input, InputGroup, InputLeftElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <Box py='4' ml='6' position='fixed' w='100%' top='0' bg='#1E1E1E' h='10vh' opacity='0.97' zIndex='1'>
      <HStack spacing='5vw'>
        <Image src={Logo} w='34px' />

        <Box w='25vw'>
          <form>
            <FormControl color='white'>
              <InputGroup size='sm'>
                <InputLeftElement pr='3'>
                  <IconButton colorScheme='whiteAlpha' size='xs' icon={<SearchIcon />} type='submit' />
                </InputLeftElement>

                <Input type='text' variant='unstyled' h='20px' mt='1' />
              </InputGroup>
            </FormControl>
          </form>
        </Box>
      </HStack>
    </Box>
  );
};

export default NavBar;
