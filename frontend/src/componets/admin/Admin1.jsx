import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  VStack,
  Text,
  Img,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FooterAdmin } from "../footer/FooterAdmin";

import { HabitacionCard } from "./HabitacionCard";
import { HabitacionContext } from "../../context/HabitacionContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";

export const Admin1 = () => {
  const { rooms, imgRooms } = useContext(HabitacionContext);
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });
  const isMobile = useBreakpointValue({ base: true, sm: false, md: false });
  // console.log(rooms);
  // console.log(imgRooms);

  return (
    <>
      {/* Contenido Principal */}
      <Box bg="primary.500" p={4} borderRadius="lg" mb={4}>
        <Flex align="center" ml={15} h="100px">
          <Link to="/">
            <Img src={imgUrl} alt="logo" width={"250px"} />
          </Link>
        </Flex>
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
        <VStack spacing={4} mb={4} flexDirection={"row"} justify={"center"}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica.png" alt="Imagen 1" />
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica1.png" alt="Imagen 2" />
          </Box>
        </VStack>
        <Center bg="varios.200" flexDirection={["column", "column", "row"]}>
          {/* División con imágenes y botones de editar */}
          {rooms.map((hab) => {
            const imagenObj = imgRooms.find(
              (img) => img.room_type_id === hab.id
            );
            const imagUrl = imagenObj ? imagenObj.image : "";
            return <HabitacionCard key={hab.id} hab={hab} imagen={imagUrl} />;
          })}
        </Center>
      </Box>

      {isMobile ? (
        <Box position={"fixed"} bottom="0">
          <FooterAdmin />
        </Box>
      ) : (
        <Footer />
      )}
    </>
  );
};
