import Head from "next/head";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home(properties4Sale) {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"center"} fontWeight={"bold"}>
      <div>
        {console.log(properties4Sale)}
        <h1>awwwee</h1>
      </div>
    </Flex>
  );
}

export async function getStaticProps() {
  const res = fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const propertiesForSale = await res.json();
  
  return {
    props: {
      properties4Sale: propertiesForSale?.hits ,
    },
  };
}