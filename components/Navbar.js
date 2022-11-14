import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Flex,
  Text,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaKey, FaSearch as SearchIcon } from "react-icons/fa";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";

const Navbar = () => (
  <Box>
    <Flex
      position={"fixed"}
      top={"0px"}
      justifyContent={"space-between"}
      p={"5"}
      w={"full"}
    >
      <Text
        fontWeight={"bold"}
        fontSize={"3xl"}
        fontFamily={"cursive"}
        color={"#A5630D"}
      >
        <Link href={"/"} passHref>
          RealEstate
        </Link>
      </Text>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} />
        <MenuList backgroundColor={"black"} border={"0px"}>
          <MenuItem>
            <Link href={"/"}>
              <Flex alignItems={"center"}>
                <FcHome />
                <Text
                  fontWeight={"semibold"}
                  _hover={{ fontWeight: "bold" }}
                  marginLeft="5px"
                >
                  Home
                </Text>
              </Flex>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/search"}>
              <Flex alignItems={"center"}>
                <SearchIcon />
                <Text
                  fontWeight={"semibold"}
                  _hover={{ fontWeight: "bold" }}
                  marginLeft="5px"
                >
                  Search page
                </Text>
              </Flex>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/search?purpose=for-sale"}>
              <Flex alignItems={"center"}>
                <FcAbout />
                <Text
                  fontWeight={"semibold"}
                  _hover={{ fontWeight: "bold" }}
                  marginLeft="5px"
                >
                  For sale page
                </Text>
              </Flex>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/search?purpose=for-rent"}>
              <Flex alignItems={"center"}>
                <FaKey />
                <Text
                  fontWeight={"semibold"}
                  _hover={{ fontWeight: "bold" }}
                  marginLeft="5px"
                >
                  For rent page
                </Text>
              </Flex>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Box>
);

export default Navbar;
