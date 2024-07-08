import React from 'react';
import { Box, Button, Center, Flex, Heading, VStack } from '@chakra-ui/react';
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Admin1 = () => {
  return (
    <>
      <Header />

      {/* Contenido Principal */}
      <Box bg="#0B265B" p={4} borderRadius="lg" mb={4}>
         {/* Título de Habitaciones */}
         <Heading as="h2" size="lg" mb={4} color="var(--secondary-500, #FFDE9D)" fontSize="28px">
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
        <Box bg="#CEC9C9" p={4} borderRadius="lg" mb={4}>
        <Flex justify="space-between" mb={4}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <img src="/img/habitacionQueen.png" alt="Habitacion Queen" style={{ width: '160px', height: '143px' }} />
            <Button mt={2} colorScheme="teal">Editar</Button>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
         <img src="/img/habitacionQueen.png" alt="Habitacion Queen" style={{ width: '160px', height: '143px' }} />
          <Button 
              position="absolute" 
              bottom="0" 
              left="50%" 
              transform="translateX(-50%)" 
              bg="#FFF1D6" 
              color="#523600" 
              fontSize="12px"
              width="100%"
              borderRadius="0"
              opacity="0.8"
              border= "1px solid var(--secondary-900, #523600)"
            >
              Editar
            </Button>
          </Box>
        </Flex>
      </Box>
      </Box>
      < Footer />
      
    </>
  );
};


