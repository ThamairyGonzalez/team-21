import {Button, Center, Container, SimpleGrid, Text } from "@chakra-ui/react"

import {FaMobile, FaCar, FaThermometerHalf} from 'react-icons/fa'
import { ServiceCard } from "./ServiceCard"
import { MdBakeryDining } from "react-icons/md"
import { FaComputer, FaWineGlass } from "react-icons/fa6"
export const Service = () => {
 
  return (
    <Container bg="white" mb={2} >
      <Text 
      fontSize="xl"
      fontWeight="bold" 
      color="black" mb={1}
      textAlign={'center'}
      >
        Servicios
      </Text>
      <SimpleGrid columns={3} spacing={1}>
        <ServiceCard icon={FaComputer} label="Espacio de Trabajo" />
        <ServiceCard icon={MdBakeryDining} label="Desayuno" />
        <ServiceCard icon={FaMobile} label="Free Wifi" />
        <ServiceCard icon={FaCar} label="Estacionamiento" />
        <ServiceCard icon={FaWineGlass} label="Servicio bar" />
        <ServiceCard icon={FaThermometerHalf} label="Climatización" />
      </SimpleGrid>
      <Center>

      <Button >Reserva con nosotros</Button>
      </Center>
    </Container>
  )
}
