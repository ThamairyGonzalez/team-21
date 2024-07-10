import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { HabitacionContext } from "../../context/HabitacionContext";


export const HabitacionCard = () => {
  const { hab, rooms } = useContext(HabitacionContext);
  console.log(rooms);
  return (

      <Box bg={"varios.100"} p={4} borderRadius="lg" mb={4}>
        <Heading
          as="h2"
          size="lg"
          mb={4}
          color="var(--primary-600, #091E49)"
          fontSize="28px"
          fontFamily="Headline/Medium"
        >
          Habitaciones
        </Heading>
        <Flex justify="space-between" mb={4}>
          <Box
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
          >
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
            <img
              src="/img/habitacionQueen.png"
              alt="Habitacion Queen"
              style={{ width: "160px", height: "143px" }}
            />
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
              <Text color="white" fontSize="14px">
                Habitacion Queen
              </Text>
            </Flex>
            <Button variant={"with-shadow"}> Editar </Button>
          </Box>

          <Box
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
          >
            <img
              src="/img/habitacionDream.png"
              alt="Habitacion Dream"
              style={{ width: "160px", height: "143px" }}
            />
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
              <Text color="white" fontSize="14px">
                Habitacion Dream
              </Text>
            </Flex>

            <Button variant={"with-shadow"}>
              <Link to={"/interes"}>Editar </Link>
            </Button>
          </Box>
          {/* nuevo card generada desde la api */}
          <Box
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
          >
            <img
              src="/img/habitacionDream.png"
              alt="Habitacion Dream"
              style={{ width: "160px", height: "143px" }}
            />
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
              <Text color="white" fontSize="14px">
                {rooms[0].description}
               <p>{rooms[0].type}</p> 
              </Text>
            </Flex>

            <Button variant={"with-shadow"}>
              <Link to={"/interes"}>Editar </Link>
            </Button>
          </Box>
          {/* fin de la card generada desde la api */}
        </Flex>
      </Box>
   
  );
};
