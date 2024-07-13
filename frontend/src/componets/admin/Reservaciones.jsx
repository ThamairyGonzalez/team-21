import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Header } from "../header/Header";
import { FooterAdmin } from "../footer/FooterAdmin";
import { RoomCard } from "../admin/RoomCard";
import { MenuReservas } from './MenuReservas';



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
                <MenuReservas/>

           {/* Card de Reservas */}
                        
                <RoomCard />

            <FooterAdmin />
            </Box>

            
        </>
    );
};


