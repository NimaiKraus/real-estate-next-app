import { Box, Text, Flex, Select } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/data4Filter";

const SearchFilter = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    });
      router.push({ pathname: path, query: query });
  };

  return (
    <Flex
      justifyContent={"space-evenly"}
      flexWrap={"wrap"}
      objectFit
      m={"0px 0px 20px 0px"}
    >
      {filters.map((filter) => (
        <Box key={filter.queryName} margin={"10px 30px"}>
          <Select
            placeholder={filter.placeholder}
            borderColor={"black"}
            color={"black"}
            width={"180px"}
            _hover={{borderColor: "black"}}
            _focusVisible={{ border: "2px solid black", fontWeight: "semibold" }}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilter;
