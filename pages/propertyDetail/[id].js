import Image from "next/image";
import { Box, Flex, Avatar, Text, Icon } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";
import { fetchApi, baseUrl } from "../../utils/fetchApi";
import ImageCarousel from "../../components/ImageCarousel";

const PropertyDetails = ({
  property: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <>
    <Box maxWidth={"1000px"} m={"auto"} p={"4"} marginTop={"100px"}>
      {photos && <ImageCarousel data={photos} />}
      <Box w={"full"} m={"auto"}>
        <Text fontSize={"l"} fontWeight={"bold"} marginTop={"20px"}>
          Description:
        </Text>
        <Text marginTop={"5px"}>{description}</Text>
        <Flex
          justifyContent="flex-start"
          alignItems={"center"}
          marginTop={"20px"}
        >
          <Text fontWeight="bold" paddingRight={6}>
            Rent: {millify(price)}$ /{rentFrequency}
          </Text>
          <Flex justifyContent="space-between">
            <Flex alignItems={"center"} marginRight={"10px"}>
              <Text fontWeight="bold">Baths:{baths}</Text>
              <FaBath />
            </Flex>
            <Flex alignItems={"center"} marginRight={"10px"}>
              <Text fontWeight="bold">Rooms:{rooms}</Text>
              <FaBed />
            </Flex>
            <Box fontWeight="bold">{millify(area)} sqft</Box>
          </Flex>
        </Flex>
        <Text fontWeight={"bold"} marginTop={"10px"}>
          Title:
        </Text>
        <Text> {title}</Text>
        <Flex marginTop={"20px"}>
          <Text fontWeight={"bold"} marginRight={"10px"}>
            Purpose:
          </Text>
          {purpose}
          <Text fontWeight={"bold"} margin={"0px 10px 0px 50px"}>
            FurnishingStatus:
          </Text>
          {furnishingStatus ? furnishingStatus : "not furnished"}
        </Flex>
      </Box>
      <Box marginTop={"20px"}>
        {amenities.length && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilities:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="#A5630D"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  </>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      property: data,
    },
  };
}
