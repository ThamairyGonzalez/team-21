import {

  Stack,
} from "@chakra-ui/react";
import { RoomCard } from "./RoomCard";

export const Room = () => {
  const rooms = [
    { name: 'Habitación Queen', image: '/img/habitacionQueen.png' },
    { name: 'Habitación Dream', image: '/img/habitacionDream.png' },
    { name: 'Habitación relax', image: '/img/habitacionRelax.png' },
  ];
  return (
    <Stack spacing={4} width="100%" maxWidth="600px" margin="auto">
    {rooms.map((room, index) => (
      <RoomCard key={index} {...room} />
    ))}
  </Stack>
  );
};
