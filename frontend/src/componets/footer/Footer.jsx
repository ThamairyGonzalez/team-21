import {
  Box,
  VStack,
  HStack,
  Text,

  Icon,
  Img,
  useColorMode,
  Center,
  Divider,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { BsGeoAlt, BsMailbox, BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaAddressBook, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


export const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Center w="100vw" bg="primary.500" pt={"15px"}>
        <Img src="/img/Logo.svg" width={"250px"} />
      </Center>
      <Box
        bg={colorMode === "dark" ? "brand.light" : "brand.dark"}
        color="white"
        py={8}
        px={4}
        flexDir={["column", "row"]}
      >
        <Center flexDir={["column", "row"]} justifyContent={"space-around"}>
          <Link>Sobre nosotros</Link>
          <Link>Habitaciones</Link>
          <Link>Nuestros servicios</Link>
          <Link to={"/interes"}>Sitios de Interes</Link>
          <Link>Formulario de reservas</Link>
        </Center>
        <Divider />
        <Center flexDir={["column", "row"]} justifyContent={"space-around"}>
          <Text p={5}>
            <Icon as={BsGeoAlt} mr={2} /> Mendoza, Argentina
          </Text>
          <Text p={5}>
            <Icon as={MdEmail} mr={2} /> contacto@oceanohotels.com.ar
          </Text>
          <Text p={5}>
            <Icon as={FaPhone} mr={2} /> (0261)-123-4567
          </Text>
        </Center>
        <Divider />
        <Center>
          <Box pt={4}>
            <HStack spacing={4} color={"primary.default"}>
              {/* <Text fontWeight="bold" mb={2}>
              Seguinos
            </Text> */}
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
        </Center>
        <Center>
          <Text fontSize="sm" pt={4}>
            © Producto FooTalent 2024
          </Text>
        </Center>
      </Box>
    </>
  );
};
