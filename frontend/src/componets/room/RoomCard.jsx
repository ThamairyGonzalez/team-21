import {
  VStack,
  Text,
  Button,
  Image,
  WrapItem,
  Flex,
  Center,
  Box,
  Wrap,
  Stack,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export const RoomCard = ({ image, name }) => {
  return (
    <WrapItem w='30%'>
      <Box>
        <Image
          src={image}
          alt={name}
          objectFit="cover"
          h='285px'
          
        />

        <Text color="black" fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Button leftIcon={<FaPlus />} variant={"outline"}>
          Ver más
        </Button>
      </Box>
    </WrapItem>
  );
};
