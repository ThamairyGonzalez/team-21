import { useState } from 'react';
import { Box, Button, Text, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      {
        image: '/img/Banner1.png',
        title: 'Descubre el oasis que buscabas',
        buttonText: 'Reservar'
      },
      {
        image: '/img/Banner2.png',
        title: 'Vive experiencias inolvidables',
        buttonText: 'Reservar'
      },
      {
        image: '/img/Banner3.png',
        title: 'Disfruta de tu tiempo',
        buttonText: 'Reservar'
      },
      {
        image: '/img/Banner4.png',
        title: 'Descubre más experiencias',
        buttonText: 'Reservar'
      },
      // Agrega aquí las URLs y textos para tus otras dos imágenes
      // { image: 'url_de_tu_segunda_imagen.jpg', title: '...', buttonText: '...' },
      // { image: 'url_de_tu_tercera_imagen.jpg', title: '...', buttonText: '...' },
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    return (
        <Box position="relative" height="400px" overflow="hidden">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={slides[currentSlide].image} 
            alt={`Slide ${currentSlide + 1}`}
            objectFit="cover"
            w="100%"
            h="400px"
          />
          <Box 
            position="absolute" 
            top="50%" 
            left="20%" 
            // transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
          >
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              {slides[currentSlide].title}
            </Text>
            <Button bg="text.default" color="black">
              {slides[currentSlide].buttonText}
            </Button>
          </Box>
        </motion.div>
        <Flex position="absolute" bottom="20px" width="100%" justify="center">
          {slides.map((_, index) => (
            <Box
              key={index}
              as="button"
              bg={currentSlide === index ? "white" : "whiteAlpha.400"}
              w="10px"
              h="10px"
              borderRadius="50%"
              mx="2px"
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Flex>
        {/* <Button position="absolute" left="10px" top="50%" onClick={prevSlide}>
          &#8249;
        </Button>
        <Button position="absolute" right="10px" top="50%" onClick={nextSlide}>
          &#8250;
        </Button> */}
      </Box>
    );
   
}

