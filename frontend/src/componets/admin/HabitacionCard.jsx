import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import {
  FaBed,
  FaEdit,
  FaNewspaper,
  FaPlusCircle,
  FaRulerCombined,
  FaSnowflake,
  FaTrash,
  FaUser,
} from "react-icons/fa";

export const HabitacionCard = ({ hab, imagen }) => {
  return (
    <Center>
      <Flex m={2}>
        <Center>
          <Box
            borderRadius="10px"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            justifyContent={"space-between"}
            border="5px"
            // overflow="hidden"
            flexWrap={'wrap'}
            bg="white"
            p={2}
          >
            <Box>
              <Image
                src={imagen}
                alt={hab.description}
                w={"280px"}
                h={"110px"}
              />
            </Box>

            <Box p={4}>
              <HStack spacing={5} mb={2}>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Icon as={FaUser} color="primary.500" />
                  <Text fontSize="sm">{hab.capacity} Personas</Text>
                </Flex>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Icon as={FaBed} color="primary.500" />
                  <Text fontSize="sm">{hab.beds}</Text>
                </Flex>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Icon as={FaRulerCombined} color="primary.500" />
                  <Text fontSize="sm">{hab.surface} m²</Text>
                </Flex>
                <Icon as={FaSnowflake} color="primary.500" />
              </HStack>

              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {hab.name}
              </Text>

              <HStack flexDir={"column"}>
                <Badge color="primary.500">ID: {hab.id}</Badge>
                <Spacer />
                <Text color="primary.500" fontWeight="semibold">
                  Precio: ${hab.price}
                </Text>
              </HStack>
              <HStack mt="4" spacing={4}></HStack>

              <HStack mt="4" spacing={4}>
                <Link to={`/admin/nueva/`}>
                  <Icon as={FaPlusCircle} w={6} h={6} color={"primary.500"} />
                </Link>
                <Link to={`/admin/habitacion/${hab.id}`}>
                  <Icon as={FaEdit} w={6} h={6} />
                </Link>
                <Link to={`/eliminar/${hab.id}`}>
                  <Icon as={FaTrash} w={6} h={6} color="negative.500" />
                </Link>
              </HStack>
            </Box>
          </Box>
        </Center>
      </Flex>
    </Center>
  );
};
