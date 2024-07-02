import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";

export const ServiceRoom = ({title,img,desc}) => {
  return (
    <Box 
    
    m='2'
    borderRadius={"35px"}
    boxShadow=" 0px 4px 30px 0px #00000040">
      <Stack color="primary.500">
        <Flex flexDir={"column"} textAlign={"center"}>
          <Image src={img} w={"100%"} h={"300px"} borderRadius={"35px 35px 0px 0px"} />
          <Box borderTop={"9px solid"} borderTopColor={"primary.500"}>
            <Text as={"h2"} fontWeight={900}>
              {title}
            </Text>
            <Text p={5} textAlign={"left"}>
              {desc}
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};
