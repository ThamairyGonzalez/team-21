import { Box, Stack, Text } from "@chakra-ui/react";
import { RoomList } from "./RoomList";

export const Room = () => {
  const rooms = [
    {
      name: "Habitación Queen",
      image: "/img/habitacionQueen.png",
      service:['Minibar','Cafetera','Caja de Segurida','Wifi de Alta Velocidad']
    },
    {
      name: "Habitación Dreams",
      image: "/img/habitacionDream.png",
      service:['Minibar','Cafetera','Kit de Amenities','Wifi de Alta Velocidad']
    },
    {
      name: "Habitación Relax",
      image: "/img/habitacionRelax.png",
      service:['Minibar','Cafetera','Tina','Ducha efecto Lluvi','Batas de Baño']
    },
  ];

  return (
    <Stack
      width="100%"
      maxWidth="600px"
      margin="auto"
      color="black"
      bg={"white"}
    >
      <Box>
        <Text as="h2" fontSize="2xl" fontWeight="bold" textAlign={"center"}>
          Conocé las habitaciones
        </Text>
        <Text as="h3" p="2">
          Nuestras habitaciones combinan elegancia y confort con modernas
          comodidades, conocelas.
        </Text>
      </Box>
      
      {rooms.map((room, index) => (
        <RoomList key={index} {...room} />
      ))}
    </Stack>
  );
};
