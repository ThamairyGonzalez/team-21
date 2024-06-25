import { Box, Text, VStack } from "@chakra-ui/react"


export const Feature = ({icon,text}) => {
  return (
    <Box color={'#071737'} 
    borderWidth={1} 
    borderRadius="md" p={1} m={1} 
    borderColor={'black'}
    bg='#F7F7F8'
    minH={'80px'}
    >
    <VStack>
      {icon}
      <Text fontSize="sm" 
      textAlign="center"
      
      >{text}</Text>
    </VStack>
  </Box>
  )
}

