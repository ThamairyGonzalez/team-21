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
import { Link } from "react-router-dom";
import { RoomModal } from "./RoomModal";
import { useState } from "react";

export const RoomCard = ({id, image, name, service,onOpen }) => {
  const [openModals, setOpenModals] = useState({});

  const handleOpenModal = (roomId) => {
    setOpenModals((prev) => ({ ...prev, [roomId]: true }));
  };

  const handleCloseModal = (roomId) => {
    setOpenModals((prev) => ({ ...prev, [roomId]: false }));
  };
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
      <Button leftIcon={<FaPlus />} variant={"outline"} onClick={onOpen}>
        Ver más
      </Button>
    </Box>
    
  <RoomModal
    key={id}
    isOpen={openModals[id] || false}
    onClose={() => handleCloseModal(id)}
    name={name}
    img={image}
    service={service}
  />

            
          
  </WrapItem>
  );
};
