import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { RoomModal } from './RoomModal';

export const RoomList = ({image, name,service}) => {
  return (
    <Box position="relative" height="200px" width="100%" >
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
     
    >
      <Text color="white" fontSize="2xl" fontWeight="bold" m={4}>
        {name}
      </Text>
     
      <RoomModal name={name} img={image} service={service}/>
     
      
    </VStack>
  </Box>
  )
}
