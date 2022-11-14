import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Avatar, Text } from "@chakra-ui/react";
import defaultImage from "../assets/images/house.jpg";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
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
    externalId,
    agency,
    isVerified,
    rooms,
    rentFrequency,
    area,
    title,
    price,
  },
}) => (
  <Link href={`/property/${externalId}`} passHref>
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
        blurDataURL="data:image/jpeg;base64,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"
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
