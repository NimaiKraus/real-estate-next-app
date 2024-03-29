import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useContext } from "react";
import Image from "next/image";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        size={"2xl"}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        size={"2xl"}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const imageStyle = {
  height: "400px",
  borderRadius: "5px",
};

const ImageCarousel = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((item) => (
        <Box
          width="910px"
          key={item.id}
          itemId={item.id}
          overflow="hidden"
          p="1"
        >
          <Image
            alt="property detail image"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            style={imageStyle}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageCarousel;