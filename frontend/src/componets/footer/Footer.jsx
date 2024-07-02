import {
  Box,
  VStack,
  HStack,
  Text,
  Link,
  Icon,
  Img,
  useColorMode,
  Center,
  Divider,
} from "@chakra-ui/react";
import { BsMailbox, BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaAddressBook, FaPhone } from "react-icons/fa6";

export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "dark" ? "brand.light" : "brand.dark"}
      color="white"
      py={8}
      px={4}
      fontWeight={900}
    >
      <Center>
        <VStack spacing={4}  align="flex-start" maxW="container.lg" mx="auto">
          <HStack spacing={2}>
            <Img src="/img/logo1.png" width={"100px"} />
           
          </HStack>

          <VStack align="flex-start" spacing={2}>
            <Link>Sobre nosotros</Link>
            <Link>Habitaciones</Link>
            <Link>Nuestros servicios</Link>
            <Link>Sitios de interés</Link>
            <Link>Formulario de reservas</Link>
          </VStack>
          <Divider/>
          <Text p={2}><Icon as={FaAddressBook}/>Mendoza, Argentina</Text>
          <Text p={2}><Icon as={BsMailbox} /> contacto@oceanohotels.com.ar</Text>
          <Text p={2}><Icon as={FaPhone} />(0261)-123-4567</Text>
          <Divider/>
          <Box pt={4}>
            <Text fontWeight="bold" mb={2}>
              Seguinos
            </Text>
            <HStack spacing={4} color={"primary.default"}>
              <Link>
                <Icon as={BsTwitterX} boxSize={6} />
              </Link>
              <Link>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
            </HStack>
          </Box>

          <Text fontSize="sm" pt={4}>
            © Todos los derechos reservados
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};
