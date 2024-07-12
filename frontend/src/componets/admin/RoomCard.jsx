import { Box, Image, Text, Grid, GridItem, Input } from '@chakra-ui/react';

export const RoomCard = () => {
    return (
        <Box
            flexDirection="column"
            alignItems="center"
            padding="16px"
            gap="10px"
            width="100%" // Ajusta el ancho según sea necesario
            height="auto" // Ajusta la altura según sea necesario
            background="#FFFFFF"
            boxShadow="0px 6px 58px rgba(196, 203, 214, 0.103611)"
            borderRadius="24px"
            marginBottom="20px" // Ajusta el margen inferior según sea necesario
        >
     
     
    <Box display="flex" alignItems="center" p="4">
      {/* Imagen de la habitación */}
      <Image src="/icons/room.png" alt="room" width="48px" height="48px" />

      {/* Contenedor para los títulos y los textos */}
      <Box ml="4">
        <Box display="flex">
          {/* Título tipo de habitación */}
          <Box mr="4">
            <Text fontSize="12px" fontWeight="bold" color="text.gris">
              Tipo de habitación
            </Text>
            {/* Nombre del cliente */}
            <Text fontSize="14px" color="text.verydark">
              Cliente
            </Text>
          </Box>
          {/* Código de reserva */}
          <Box>
            <Text fontSize="12px" color="text.gris" fontWeight="bold">
              Cod Reserva
            </Text>
            {/* Valor del código de reserva */}
            <Text fontSize="14px" color="text.verydark">
              1234
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>

           
            {/* Check-in y Check-out */}
            
        <Box display="flex" alignItems="center">
          <Image src="/icons/inactive.png" alt="calendar inactive" width="24px" height="24px" marginRight="8px" />
          <Text fontSize="14px" color="#91929E">
            In: 20/04 Out: 22/04
          </Text>
        </Box>
   

            {/* Grid para N° Habitación, Confirmado y Status */}
            <Grid templateColumns="repeat(3, 1fr)" gap="10px" marginTop="16px">
                <GridItem>
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">
                        N° Habitación
                    </Text>
                    <Text fontSize="14px" color="text.verydark">
                        305
                    </Text>
                </GridItem>
                <GridItem>
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">
                        Confirmado
                    </Text>
                    <Text fontSize="14px" color="text.verydark">
                        10 de abril
                    </Text>
                </GridItem>
                <GridItem>
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">
                        Status
                    </Text>
                    
                    <Text  
                      sx={{
                        width: '91px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 'none',
                        order: '1',
                        flexGrow: '0',
                        bg:"#F5667A1A",
                        color: '#F2415A',
                        fontsize:"12px"
                      }}
                     >
                        Cancelado
                    </Text>
                  
                </GridItem>
                

            </Grid>

            <Box>
                    <Text fontSize="14px" fontWeight="bold" color="#20102B">
                    Observaciones
                    </Text>
                    
                    <Input
                        placeholder="Escribe tus observaciones aquí"
                        marginTop="8px"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '0px',
                            gap: '12px',
                            width: '292px',
                            height: '44px',
                            boxShadow: '0px 1px 2px 0px #4D40551A',
                            borderRadius: '4px',
                            flex: 'none',
                            order: '0',
                            flexGrow: '1',
                            border: '1px solid #4D40551A',
                        }}
                    />
                </Box>
        </Box>
    );
};




    