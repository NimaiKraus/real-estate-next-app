import Head from "next/head";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";
import RealEstateImage from "../assets/images/realEstate.svg";

export default function Home({ properties4Sale, properties4Rent }) {
  return (
    <>
      <Flex justifyContent={"center"} alignItems="center" marginTop={"100px"}>
        <Text
          fontWeight={"bold"}
          fontSize={"2xl"}
          marginBottom={"10px"}
          marginTop="20px"
          maxWidth={"350px"}
        >
          Buy or rent your dream home from a selection of the best properties...
        </Text>
        <Image src={RealEstateImage} alt="Real estate image" width={560} height={300}/>
      </Flex>
      <Flex justifyContent={"center"}>
      <Text
          fontWeight={"bold"}
          fontSize={"3xl"}
          marginBottom={"20px"}
          marginTop={"45px"}
          color={"#dbdbdb"}
        >
          Properties for rent
        </Text>
      </Flex>
      <Flex flexWrap={"wrap"} justifyContent={"center"} fontWeight={"bold"}>
        {properties4Rent.map((property) => {
          return <Property property={property} key={property.id} />;
        })}
      </Flex>
      <Flex justifyContent={"center"}>
        <Text
          fontWeight={"bold"}
          fontSize={"3xl"}
          marginBottom={"20px"}
          marginTop={"20px"}
          color={"#dbdbdb"}
        >
          Properties for sale
        </Text>
      </Flex>
      <Flex flexWrap={"wrap"} justifyContent={"center"} fontWeight={"bold"}>
        {properties4Sale.map((property) => {
          return <Property property={property} key={property.id} />;
        })}
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const propertiesForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertiesForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      properties4Sale: propertiesForSale?.hits,
      properties4Rent: propertiesForRent?.hits,
    },
  };
}
