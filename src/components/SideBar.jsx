import { Flex, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/Home.svg";
import PlaylistIcon from "../assets/playlist.svg";
import RadioIcon from "../assets/radio.svg";
import VideoIcon from "../assets/videos.svg";
import ProfileIcon from "../assets/profile.svg";
import LogoutIcon from "../assets/Logout.svg";

const SideBar = ({ logoutUser }) => {
  const logout = () => {
    logoutUser();
  };

  return (
    <Flex position='fixed' display={{ base: "none", md: "flex" }}>
      <VStack w='60px' spacing={8}>
        <VStack borderRadius='15px' py='5' px='1' bg='#1A1E1F' spacing={6}>
          <Link to='/'>
            <Image src={HomeIcon} w='35px' className='zoomIcon' />
          </Link>
          <Link to='/playlists'>
            <Image src={PlaylistIcon} w='22px' className='zoomIcon' />
          </Link>
          <Link to='/collections'>
            <Image src={RadioIcon} w='22px' className='zoomIcon' />
          </Link>
          <Image src={VideoIcon} w='22px' />
        </VStack>

        <VStack borderRadius='15px' py='5' px='3' bg='#1A1E1F' spacing={6}>
          <Image src={ProfileIcon} w='22px' />
          <Image
            src={LogoutIcon}
            w='22px'
            onClick={logout}
            className='zoomIcon'
            _hover={{ cursor: "pointer" }}
          />
        </VStack>
      </VStack>
    </Flex>
  );
};

export default SideBar;
