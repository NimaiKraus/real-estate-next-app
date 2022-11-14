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
    const { query } = router.query;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };
  return (
    <Flex justifyContent={"space-evenly"} flexWrap={"wrap"} m={"20px 0px"}>
      {filters.map((filter) => (
        <Box key={filter.queryName} margin={"10px 30px"}>
          <Select
            placeholder={filter.placeholder}
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
