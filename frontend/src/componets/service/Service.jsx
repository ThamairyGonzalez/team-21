import { FaWifi, FaCar, FaGlassMartiniAlt, FaThermometerHalf, FaCoffee, FaLaptop } from 'react-icons/fa';
import { SimpleGrid, Button, VStack, Center } from '@chakra-ui/react';
import { Feature } from './Feature';
export const Service = () => {
  return (
    <VStack width="100%" maxWidth="600px" mx="auto">
    <SimpleGrid columns={3}  width="100%">
      <Feature icon={<FaLaptop size="24px" />} text="Espacio de Trabajo" />
      <Feature icon={<FaCoffee size="24px" />} text="Desayuno" />
      <Feature icon={<FaWifi size="24px" />} text="Free Wifi" />
      <Feature icon={<FaCar size="24px" />} text="Estacionamiento" />
      <Feature icon={<FaGlassMartiniAlt size="24px" />} text="Servicio bar" />
      <Feature icon={<FaThermometerHalf size="24px" />} text="Climatización" />
    </SimpleGrid>
    
    <Center width="100%">
      <Button
        variant={'solid'}
        
      >
        RESERVA CON NOSOTROS
      </Button>
    </Center>
  </VStack>
  )
}
