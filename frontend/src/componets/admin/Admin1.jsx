import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Header } from "../header/Header";
import { FooterAdmin } from "../footer/FooterAdmin";

import { HabitacionCard } from "./HabitacionCard";
import { HabitacionContext } from "../../context/HabitacionContext";
import { useContext } from "react";

export const Admin1 = () => {
  const { rooms, imgRooms } = useContext(HabitacionContext);
  console.log(rooms);
  console.log(imgRooms);

  return (
    <>
      <Header />

      {/* Contenido Principal */}
      <Box bg="#0B265B" p={4} borderRadius="lg" mb={4} >
        {/* Título de Habitaciones */}
        <Heading
          as="h2"
          size="lg"
          mb={4}
          color="var(--secondary-500, #FFDE9D)"
          fontSize="28px"
        >
          Habitaciones
        </Heading>

        {/* División para las 2 imágenes */}
        <VStack spacing={4} mb={4}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica.png" alt="Imagen 1" />
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica1.png" alt="Imagen 2" />
          </Box>
        </VStack>
        <Flex  wrap={"wrap"} justify={"center"} bg="gray.100" flexDirection={['column','row']}>
          {/* División con imágenes y botones de editar */}
          {rooms.map((hab) => {
            const imagenObj = imgRooms.find(
              (img) => img.room_type_id === hab.id
            );
            const imagUrl = imagenObj ? imagenObj.image : "";
            return <HabitacionCard key={hab.id} hab={hab} imagen={imagUrl} />;
          })}
        </Flex>
      </Box>
      <FooterAdmin />
    </>
  );
};
