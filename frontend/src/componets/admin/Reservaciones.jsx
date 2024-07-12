// src/components/admin/Reservaciones.jsx
import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Header } from "../header/Header";
import { FooterAdmin } from "../footer/FooterAdmin";
import { RoomCard } from "../admin/RoomCard";

// Componente del Menú
const Menu = () => {
    return (
        <Flex
            flexDirection="column"
            alignItems="flex-start"
            padding="10px"
            gap="10px"
            width="395px"
            height="80px"
            bg="#CEC9C9"
            
            boxShadow="0px 6px 58px rgba(196, 203, 214, 0.103611)"
        >
            {/* Items del Menú */}
            <Flex
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                padding="10px"
                gap="10px"
                width="375px"
                height="60px"
                borderBottom="1px solid rgba(93, 135, 168, 0.5)"
            >
                {/* Item 1 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg="#172635"
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="30.06%"
                        right="28.25%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                    >
                        Todas
                    </Box>
                </Box>

                {/* Item 2 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg="#FFFFFF"
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="8.5%"
                        right="6.99%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="400"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                        opacity="0.7"
                    >
                        Confirmadas
                    </Box>
                </Box>

                {/* Item 3 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg="#FFFFFF"
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="4.2%"
                        right="2.28%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="400"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                        opacity="0.7"
                    >
                        Por confirmar
                    </Box>
                </Box>

                {/* Item 4 */}
                <Box
                    width="88.75px"
                    height="40px"
                    position="relative"
                >
                    {/* underline */}
                    <Box
                        position="absolute"
                        left="0"
                        right="0"
                        top="95%"
                        height="2px"
                        bg="#FFFFFF"
                    />
                    {/* Label */}
                    <Box
                        position="absolute"
                        left="12.8%"
                        right="11.71%"
                        top="25%"
                        bottom="30%"
                        fontFamily="Open Sans"
                        fontWeight="400"
                        fontSize="13px"
                        lineHeight="18px"
                        display="flex"
                        alignItems="flex-end"
                        textAlign="center"
                        letterSpacing="-0.02em"
                        textTransform="capitalize"
                        color="#172635"
                        opacity="0.7"
                    >
                        Canceladas
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};

export const Reservaciones = () => {
    return (
        <>
            <Header />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding="20px"
                minHeight="100vh"
                bg='#CEC9C9'
            >
                {/* Componente del Título y Botón Volver */}
                <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    maxWidth="398px"
                    padding="0px 10px 0px 16px"
                    marginBottom="20px"
                    bg="#CEC9C9"
                >
                     
                    
                    {/* Botón Volver */}
                    <Flex
                        alignItems="center"
                        width="24px"
                        height="24px"
                        cursor="pointer"
                    >
                        <ArrowBackIcon color="#091E49" />
                    </Flex>

                    {/* Título Reservas */}
                    <Heading
                        width="127px"
                        height="36px"
                        fontFamily="Poppins"
                        fontWeight="400"
                        fontSize="28px"
                        lineHeight="36px"
                        color="#091E49"
                    >
                        Reservas
                    </Heading>
                </Flex>
                <Box
                     
                     >
                       <Image src="/img/ModalDatePicker.png" alt="calendar" width="395px" height="344px"  />
                    </Box>
                {/* Menú */}
                <Menu />

           {/* Card de Reservas */}
                        
                <RoomCard />

            <FooterAdmin />
            </Box>

            
        </>
    );
};

export default Reservaciones;
