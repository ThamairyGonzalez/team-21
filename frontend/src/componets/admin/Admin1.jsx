import React from 'react';
import { Box, Button, Center, Flex, Heading, VStack,Text  } from '@chakra-ui/react';
import { Header } from "../header/Header";
import { FooterAdmin } from "../footer/FooterAdmin";

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
        <Heading as="h2" size="lg" mb={4} color="var(--primary-600, #091E49)" fontSize="28px" fontFamily="Headline/Medium">
          Habitaciones
        </Heading>
        <Flex justify="space-between" mb={4}>
          <Box maxW="sm"  borderRadius="lg" overflow="hidden" position="relative">
          <Text 
            position="absolute" 
            top="10px" 
            left="10px" 
            color="white" 
            bg="rgba(0, 0, 0, 0.5)" 
            p="5px" 
            borderRadius="md"
          >
          Habitacion Queen
      </Text>
          <img src="/img/habitacionQueen.png" alt="Habitacion Queen" style={{ width: '160px', height: '143px' }} />
          <Flex
              position="absolute"
              width="141px"
              height="20px"
              left="calc(50% - 70.5px)" // Simplified: 141px / 2 = 70.5px
              top="19.5px"
              bg="rgba(182, 204, 246, 0.2)"
              backdropFilter="blur(10.55px)"
              borderRadius="8px"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="0px"
              gap="8px"
              zIndex="1"
              flex="none"
              order="1"
              flexGrow="0"
            >
              <Text 
                color="white" 
                fontSize="14px"
              >
                Habitacion Queen
              </Text>
            </Flex>
          <Button variant={"with-shadow"}> Editar </Button>
          
          </Box>

          <Box maxW="sm"  borderRadius="lg" overflow="hidden" position="relative">
         <img src="/img/habitacionDream.png" alt="Habitacion Dream" style={{ width: '160px', height: '143px' }} />
         <Flex
              position="absolute"
              width="141px"
              height="20px"
              left="calc(50% - 70.5px)" // Simplified: 141px / 2 = 70.5px
              top="19.5px"
              bg="rgba(182, 204, 246, 0.2)"
              backdropFilter="blur(10.55px)"
              borderRadius="8px"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="0px"
              gap="8px"
              zIndex="1"
              flex="none"
              order="1"
              flexGrow="0"
            >
              <Text 
                color="white" 
                fontSize="14px"
              >
                Habitacion Dream
              </Text>
            </Flex>
      
      <Button variant={"with-shadow"}   > Editar </Button>
          </Box>
        </Flex>
      </Box>
      </Box>
      < FooterAdmin />
      
    </>
  );
};


