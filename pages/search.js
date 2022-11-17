import {
  Box,
  Flex,
  Text,
  Button,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { BsFilter } from "react-icons/bs";
import SearchFilter from "../components/SearchFilter";
import Property from "../components/Property";
import { fetchApi, baseUrl } from "../utils/fetchApi";

const Search = ({ properties }) => {
  const router = useRouter();
  const [isFiltersShown, setIsFiltersShown] = useState(false);

  return (
    <Box>
      <Button
        onClick={() => {
          setIsFiltersShown(!isFiltersShown);
        }}
        margin={"130px 0px 0px 20px"}
        color="blackAlpha.900"
      >
        Open filter section <Icon as={BsFilter} marginTop={"7px"} />
      </Button>
      {isFiltersShown && (
        <Drawer
          isOpen={isFiltersShown}
          placement="left"
          onClose={() => setIsFiltersShown(!isFiltersShown)}
        >
          <DrawerContent>
            <DrawerCloseButton color={"black"} marginTop={"8px"} />
            <DrawerHeader color={"black"}>Filter properties</DrawerHeader>
            <DrawerBody>
              <SearchFilter />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
      <Flex justifyContent={"center"} alignItems={"center"} marginTop={"10px"}>
        <Box>
          <Text fontSize={"xl"} fontWeight={"bold"} marginBottom={"20px"}>
            Properties {router.query.purpose}
          </Text>
        </Box>
      </Flex>
      <Flex flexWrap={"wrap"}>
        {properties.map((property) => {
          return <Property property={property} key={property.id} />;
        })}
      </Flex>
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
