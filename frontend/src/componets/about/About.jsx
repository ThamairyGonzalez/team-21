import { Box, Center, Img, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Center color="black" w={"100%"} flexDir={["column", "row"]} p={[2, 4]}>
      <Box w={["100vw", "50vw"]}>
        <Text as="h1" fontSize={"1.2em"} fontWeight={900} textAlign={"center"} margin={3} display={"inline-block"}>
          Bienvenidos a Oceano Hotel
        </Text>
        <Text as="h3" textAlign={"justify"} marginRight={3}>
          Ofrecemos una experiencia de lujo y comodidad en un entorno urbano
          vibrante. Con modernas instalaciones, un servicio excepcional y una
          ubicación céntrica, es el lugar ideal para viajeros de negocios,
          eventos corporativos y escapadas de ocio. Disfruta de nuestras
          elegantes habitaciones, deliciosas opciones gastronómicas y diversas
          amenidades que garantizan una estancia memorable.
        </Text>
      </Box>
      <Img src="/img/about.png" />
    </Center>
  );
};
