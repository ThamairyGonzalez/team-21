import { Box, Heading, Img, Text, useColorMode } from "@chakra-ui/react";

export const About = () => {
  const { colorMode} = useColorMode();
  return (
    <Box 
    color={colorMode==='dark'?'black': 'writhe'}
    as="section" py={16} display={"flex"} flexDir={'column'}>
      <Heading as="h2" size="xl" mb={4}>
       Bienvenidos a Oceano Hotel
      </Heading>
      <Text textAlign={"left"} p={2}>

      <p>Ofrecemos una experiencia de lujo y comodidad en un entorno urbano vibrante. Con modernas instalaciones, un servicio excepcional y una ubicación céntrica, es el lugar ideal para viajeros de negocios, eventos corporativos y escapadas de ocio. Disfruta de nuestras elegantes habitaciones, deliciosas opciones gastronómicas y diversas amenidades que garantizan una estancia memorable.</p>
      </Text>
      <Img src='/img/bienvenida.png' alignContent={'center'}/>
    </Box>
  );
};
