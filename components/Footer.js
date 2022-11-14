import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";

const Footer = () => (
  <Box bg={"#100f0f"} w={"full"} marginTop={"100px"} bottom={"0px"}>
    <Container as={Stack} maxW={"6xl"} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        <Stack align={"flex-start"}>
          <Text color={"#A5630D"} fontSize={"2xl"} fontWeight={"bold"}>Company</Text>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Careers</Link>
          <Link href={"#"}>Contact Us</Link>
        </Stack>

        <Stack align={"flex-start"}>
          <Text color={"#A5630D"} fontSize={"2xl"} fontWeight={"bold"}>Support</Text>
          <Link href={"#"}>Help Center</Link>
          <Link href={"#"}>Safety Center</Link>
          <Link href={"#"}>Community Guidelines</Link>
        </Stack>

        <Stack align={"flex-start"}>
          <Text color={"#A5630D"} fontSize={"2xl"} fontWeight={"bold"}>Legal</Text>
          <Link href={"#"}>Cookies Policy</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Terms of Service</Link>
          <Link href={"#"}>Law Enforcement</Link>
        </Stack>
      </SimpleGrid>
    </Container>

    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={"#A5630D"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ md: "space-between" }}
        align={{ md: "center" }}
      >
        <Text color={"#A5630D"}>© 2022 Chakra Templates. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <FaTwitter color="#A5630D" cursor={"pointer"}/>
          <FaYoutube color="#A5630D" cursor={"pointer"}/>
          <FaInstagram color="#A5630D" cursor={"pointer"}/>
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default Footer;
