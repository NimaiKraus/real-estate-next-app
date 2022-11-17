import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import defaultImage from "../assets/images/house.jpg";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";

const imageStyle = {
  width: "400px",
  height: "260px",
  borderRadius: "5px",
};

const Property = ({
  property: {
    baths,
    coverPhoto,
    externalID,
    agency,
    isVerified,
    rooms,
    rentFrequency,
    area,
    title,
    price,
  },
}) => (
  <Link href={`/propertyDetail/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Image
        src={coverPhoto ? coverPhoto.url : defaultImage}
        width={400}
        height={260}
        style={imageStyle}
        alt="rent house image"
        placeholder="blur"
        blurDataURL={coverPhoto.url}
      />
      <Box w="full" color="#A5630D">
        <Flex justifyContent="flex-start" alignItems={"center"}>
          
          <Text fontWeight="bold" paddingRight={6}>
            {millify(price)}$ /{rentFrequency}
          </Text>
          <Flex justifyContent="space-between" w={"150px"} >
            <Flex alignItems={"center"}>
              {baths}
              <FaBath />
            </Flex>
            <Flex alignItems={"center"}>
              {rooms}
              <FaBed />
            </Flex>
            <Box>{millify(area)} sqft</Box>
          </Flex>
        </Flex>
        <Text>{`${title.length > 30 ? title.substr(0, 30) : title}`}</Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
