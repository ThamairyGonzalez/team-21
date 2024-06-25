import { Box, Stack, Text } from "@chakra-ui/react";
import { RoomList } from "./RoomList"

export const Room = () => {
  const rooms = [
    { name: 'Habitación Queen', image: '/img/habitacionQueen.png' },
    { name: 'Habitación Dreams', image: '/img/habitacionDream.png' },
    { name: 'Habitación relax', image: '/img/habitacionRelax.png' },
  ];

  return (
    <Stack 
   
     width="100%" 
     maxWidth="600px" 
     margin="auto" 
     color='black'
     bg={'white'}
     >
      <Box>
        <Text as="h2"
        fontSize="2xl" 
        fontWeight="bold"
        textAlign={'center'}
        >Conocé las habitaciones</Text>
        <Text as="h3" p='2'>Nuestras habitaciones combinan elegancia y confort con modernas comodidades, conocelas.</Text>
      </Box>
      {rooms.map((room, index) => (
        <RoomList key={index} {...room} />
      ))}
    </Stack>
  );
}
