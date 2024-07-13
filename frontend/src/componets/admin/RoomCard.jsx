import { Box, Image, Text, Grid, GridItem, Input } from '@chakra-ui/react';
import StatusText from "./StatusText";

export const RoomCard = () => {
  const estado="porconfirmar"
    return (
        <Box
            flexDirection="column"
            alignItems="center"
            padding="16px"
            gap="10px"
            width="100%" 
            height="auto" 
            background="#FFFFFF"
            boxShadow="0px 6px 58px rgba(196, 203, 214, 0.103611)"
            borderRadius="24px"
            marginBottom="20px" 
        >
     
     
    <Box display="flex" alignItems="center" p="4">
      {/* Imagen de la habitación */}
      <Image src="/icons/room.png" alt="room" width="48px" height="48px" />

      {/* Contenedor para los títulos y los textos */}
      <Box ml="4">
        <Box display="flex">
          {/* Título tipo de habitación */}

          <Box mr="4">
            <Text fontSize="12px" fontWeight="bold" color="text.gris"> Tipo de habitación </Text>
            {/* Nombre del cliente */}
            <Text fontSize="14px" color="text.verydark"> Cliente </Text>
          </Box>

          {/* codigo de reserva y su valor se muestra cuando el estado es confirmado */}
          {(estado=="confirmado")&&
           
          <Box>
            <Text fontSize="12px" color="text.gris" fontWeight="bold">Cod Reserva</Text>
            <Text fontSize="14px" color="text.verydark"> 1234</Text>
          </Box>
          }

        </Box>
      
      </Box>
    </Box>

           
      {/* Check-in y Check-out */}
            
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image src="/icons/inactive.png" alt="calendar inactive" width="24px" height="24px" marginRight="8px" />
          <Text fontSize="14px" color="#91929E"> In: 20/04 Out: 22/04</Text>
        </Box>
    
    {/* Grid para N° Habitación, Confirmado y Status */}
                 
          <Grid templateColumns="repeat(3, 1fr)" gap="10px" marginTop="16px">
          {(estado=="confirmado")?
                  <GridItem>
                      <Text fontSize="12px" fontWeight="bold" color="text.gris"> N° Habitación </Text>
                      <Text fontSize="14px" color="text.verydark"> 305</Text>
                  </GridItem>
       
               :
              <GridItem>
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">N° Personas</Text>
                    <Text fontSize="14px" color="text.verydark"> 2</Text>
              </GridItem>
          }           

            {(estado=="porconfirmar")?
                 <GridItem>
                    <Text fontSize="12px" fontWeight="bold" color="text.gris"> Solicitado </Text>
                    <Text fontSize="14px" color="text.verydark"> 10 de abril</Text>
                    </GridItem>
                : 
                <GridItem>
                  <Text fontSize="12px" fontWeight="bold" color="text.gris">Confirmado</Text>
                  <Text fontSize="14px" color="text.verydark"> 10 de abril</Text>
                </GridItem>
            }     

                <GridItem >
                  <Text fontSize="12px" fontWeight="bold" color="text.gris" align="center" >Status</Text>
                 
                    {(estado === "confirmado") && <StatusText status="confirmado">Confirmado</StatusText>}
                    {(estado === "cancelado") && <StatusText status="cancelado">Cancelado</StatusText>}
                    {(estado === "porconfirmar") && <StatusText status="porConfirmar">Por Confirmar</StatusText>}
                 
                </GridItem>
                
          </Grid>

            <Box>
                    <Text fontSize="14px" fontWeight="bold" color="#20102B" > Observaciones </Text>
                    
                    <Input
                        placeholder="Escribe tus observaciones aquí"
                        marginTop="8px"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '0px',
                            gap: '12px',
                            width: '100%',
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




    