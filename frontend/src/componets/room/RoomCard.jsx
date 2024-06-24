import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

export const RoomCard = ({ image, name }) => (
  <Box position="relative" height="200px" width="100%" mb={4}>
    <Image
      src={image}
      alt={name}
      objectFit="cover"
      width="100%"
      height="100%"
    />
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="rgba(0,0,0,0.4)"
    />
    <VStack
      position="absolute"
      bottom="10px"
      left="10px"
      align="flex-start"
      spacing={2}
    >
      <Text color="white" fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Button leftIcon={<FaPlus />} variant={'outline'} >
        Ver más
      </Button>
    </VStack>
  </Box>
);

