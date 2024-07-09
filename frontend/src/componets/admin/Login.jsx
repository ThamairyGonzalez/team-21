import { Box, Button, Center, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import "./admin.css";
import { UsuarioContext } from '../../context/UsuarioContext';


export const Login = () => {
  const {usuario,login}=useContext(UsuarioContext)
  return (
    <>
   
    <Center flexDir={'column'}>
        <Box
        >caja 1</Box>
        {login && <Text>Nombre:{usuario.nombre}</Text>}
        <Text  color={['red','green']} >Hola</Text>
         <Button>boton 1</Button>
        <Button variant={'outline'}>boton 1</Button>
        <Button variant={"with-shadow"} >boton 4</Button>
        <Button>boton 1</Button>
        <Button variant={"combined"}> asdfñjasdfasd</Button>
        <button >sdfsdfasdfs</button>
        <Box>caja 2</Box>
    </Center>
    </>
  )
}
