import React from 'react';
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  NumberInput, 
  NumberInputField, 
  VStack 
} from '@chakra-ui/react';

export const Admin2 = () => {
  return (
    <>
      <Header />
      <Box p={4} maxW="sm" mx="auto" borderWidth="1px" borderRadius="lg" bg="#FFDE9D73" >
        <VStack spacing={4}>
          {/* Título */}
          <FormControl id="titulo">
            <FormLabel>TIPO DE HABITACION</FormLabel>
          </FormControl>
          
          {/* Cargar imagen */}
          <FormControl id="imagen">
            <FormLabel>Cargar Imagen</FormLabel>
            <Input type="file" />
          </FormControl>

          {/* Campo ID */}
          <FormControl id="id">
            <FormLabel fontFamily="Inter" fontSize="14px">ID:</FormLabel>
            <Input
              placeholder="ROOM ID"
              bg="#FFFFFF"
              border="1px solid #E2E2E2"
              fontSize="14px"
              width="365px"
              height="40px"
              padding="10px 16px"
              borderRadius="4px 0px 0px 0px"
              borderTop="1px solid #E2E2E2"
              borderRight="0"
              borderBottom="0"
              borderLeft="0"
              
            />
          </FormControl>

          {/* Campo Precio */}
          <FormControl id="precio">
            <FormLabel fontFamily="Inter" fontSize="14px">Precio:</FormLabel>
            <NumberInput min={0} precision={2}>
              <NumberInputField 
              placeholder="Establece un precio" 
              bg="#FFFFFF"
              border="1px solid #E2E2E2"
              fontSize="14px"
              width="365px"
              height="40px"
              padding="10px 16px"
              borderRadius="4px 0px 0px 0px"
              borderTop="1px solid #E2E2E2"
              borderRight="0"
              borderBottom="0"
              borderLeft="0"
              />
            </NumberInput>
          </FormControl>

          {/* Campo Habitaciones */}
          <Box width="100%">
            <FormLabel fontSize="24px">Habitaciones</FormLabel>
          </Box>

          {/* Capacidad */} 
          <FormControl id="capacidad">
            <FormLabel fontFamily="Inter" fontSize="14px">Capacidad:</FormLabel>
            <NumberInput min={0}>
              <NumberInputField 
              placeholder="1" 
              bg="#FFFFFF"
              border="1px solid #E2E2E2"
              fontSize="14px"
              width="365px"
              height="40px"
              padding="10px 16px"
              borderRadius="4px 0px 0px 0px"
              borderTop="1px solid #E2E2E2"
              borderRight="0"
              borderBottom="0"
              borderLeft="0"
              />
            </NumberInput>
          </FormControl>

          {/* Campo Doble */}
          <FormControl id="dobles">
            <FormLabel fontFamily="Inter" fontSize="14px">Dobles:</FormLabel>
            <NumberInput min={0}>
              <NumberInputField 
              bg="#FFFFFF"
              border="1px solid #E2E2E2"
              fontSize="14px"
              width="365px"
              height="40px"
              padding="10px 16px"
              borderRadius="4px 0px 0px 0px"
              borderTop="1px solid #E2E2E2"
              borderRight="0"
              borderBottom="0"
              borderLeft="0"
              placeholder="3" />
            </NumberInput>
          </FormControl>

          {/* Botón de Enviar */}
          <Button colorScheme="teal" type="submit">Enviar</Button>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};


