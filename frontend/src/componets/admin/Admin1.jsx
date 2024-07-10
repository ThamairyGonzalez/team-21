import React from "react";
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
import { Link } from "react-router-dom";
import { HabitacionCard } from "./HabitacionCard";
import { HabitacionProvider } from "../../context/HabitacionProvider";

export const Admin1 = () => {
  return (
    <>
      <Header />

      {/* Contenido Principal */}
      <Box bg="#0B265B" p={4} borderRadius="lg" mb={4}>
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

        {/* División con imágenes y botones de editar */}
        <HabitacionProvider>
          <HabitacionCard />
        </HabitacionProvider>
      </Box>
      <FooterAdmin />
    </>
  );
};
