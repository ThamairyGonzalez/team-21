import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RoomModal } from "./RoomModal";

export const Room = () => {
  const slides = [
    {
      title: "Habitación Queen",
      image: "/img/conocer1.png",
      buttonText: "Ver más",
      service: [
        "Minibar",
        "Cafetera",
        "Caja de Segurida",
        "Wifi de Alta Velocidad",
      ],
    },
    {
      title: "Habitación Dreams",
      image: "/img/habitacionDream.png",
      buttonText: "Ver más",
      service: [
        "Minibar",
        "Cafetera",
        "Kit de Amenities",
        "Wifi de Alta Velocidad",
      ],
    },
    {
      title: "Habitación Relax",
      image: "/img/habitacionRelax.png",
      buttonText: "Ver más",
      service: [
        "Minibar",
        "Cafetera",
        "Tina",
        "Ducha efecto Lluvi",
        "Batas de Baño",
      ],
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const nextSlide = useCallback(() => {
    if (!isOpen) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [slides.length, isOpen]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <Stack
      width={["395px"]}
      maxWidth={["430px"]}
      m="auto"
      color="black"
      bg={"white"}
    >
      <Box>
        <Text as="h2" fontSize="2xl" fontWeight="bold" textAlign={"center"}>
          Conocé las habitaciones
        </Text>
        <Text as="h3" p={2}>
          Nuestras habitaciones combinan elegancia y confort con modernas
          comodidades, conocelas.
        </Text>
      </Box>
      <Box position="relative" h={'450px'}overflow="hidden">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            objectFit="cover"
            borderRadius={"16px"}
            m="auto"
            w={["387px", "500px"]}
            h={"322px"}
            // h="400px"
          />
        </motion.div>
        <Flex position="absolute" bottom="20px" width="100%" justify="center">
          {slides.map((_, index) => (
            <Box
              key={index}
              as="button"
              bg={currentSlide === index ? "white" : "whiteAlpha.400"}
              w="30px"
              h="4px"
              // borderRadius="50%"
              mx="2px"
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Flex>
        <Box
          position="absolute"
          top="75%"
          left="5%"
          // transform="translate(-50%, -50%)"
          textAlign="left"
          size="24px"
        >
          <Text fontSize="3xl" fontWeight="bold" mb={4}>
            {slides[currentSlide].title}
          </Text>

          <RoomModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            name={slides[currentSlide].title}
            img={slides[currentSlide].image}
            service={slides[currentSlide].service}
          />
        </Box>
        {/* <Button position="absolute" left="10px" top="50%" onClick={prevSlide}>
        &#8249;
      </Button>
      <Button position="absolute" right="10px" top="50%" onClick={nextSlide}>
        &#8250;
      </Button> */}
      </Box>

      {/* {rooms.map((room, index) => (
        <RoomList key={index} {...room} />
      ))} */}
    </Stack>
  );
};
