import { Box, Image, Text, Grid, GridItem, Input } from '@chakra-ui/react';
import {StatusText} from "./StatusText";


import { formatDate } from '../../assets/formatDate.js';
import { useEffect, useState } from 'react';


export const RoomCard = ({status,id,check_in_date,check_out_date,room_id,client_id,created,updated}) => {
  const BASE_URL = 'https://hotel-oceano.onrender.com'; 
  const [roomNumber, setRoomNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  useEffect(() => {
    const fetchRoomNumber = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api-room/room/${room_id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRoomNumber(data.number);
        const res = await fetch(`${BASE_URL}/api-room/roomtype/${data.room_type_id}`);
        const roomTypeId = await res.json();
        setRoomType(roomTypeId.type)
        
        
      } catch (error) {
        console.error('Error fetching room number:', error);
      }
    };
  
    if (status === 'A' && room_id) {
      fetchRoomNumber();
    }
  }, [status, room_id]);

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
            <Text fontSize="14px" color="text.verydark">{roomType}  </Text>
          </Box>
          {/* Código de reserva */}
          {status=='A'&& 
          <Box>
            <Text fontSize="12px" color="text.gris" fontWeight="bold">Cod Reserva</Text>
            <Text fontSize="14px" color="text.verydark"> {id.slice(-6)}</Text>
          </Box>
          }
        </Box>
      
      </Box>
    </Box>

           
      {/* Check-in y Check-out */}
            
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image src="/icons/inactive.png" alt="calendar inactive" width="24px" height="24px" marginRight="8px" />
          <Text fontSize="14px" color="#91929E"> In: {formatDate(check_in_date)} Out: {formatDate(check_out_date)}</Text>
        </Box>
    
    {/* Grid para N° Habitación, Confirmado y Status */}
                 
          <Grid templateColumns="repeat(3, 1fr)" gap="10px" marginTop="16px">
          {(status=="A")?
                  <GridItem>
                      <Text fontSize="12px" fontWeight="bold" color="text.gris"> N° Habitación </Text>
                      <Text fontSize="14px" color="text.verydark"> {roomNumber}</Text>
                  </GridItem>
       
               :
              <GridItem>
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">N° Personas</Text>
                    <Text fontSize="14px" color="text.verydark"> 2</Text>
              </GridItem>
          }           

            {(status!="A")?
                 <GridItem>
                    <Text fontSize="12px" fontWeight="bold" color="text.gris"> Solicitado </Text>
                    <Text fontSize="14px" color="text.verydark"> {formatDate(created)}</Text>
                    </GridItem>
                : 
                <GridItem>
                  <Text fontSize="12px" fontWeight="bold" color="text.gris">Confirmado</Text>
                  <Text fontSize="14px" color="text.verydark"> {formatDate(updated)}</Text>
                </GridItem>
            }     

                <GridItem >
                  <Text fontSize="12px" fontWeight="bold" color="text.gris" align="center" >Status</Text>
                 
                    {(status === "A") && <StatusText status="confirmado">Confirmado</StatusText>}
                    {(status === "C") && <StatusText status="cancelado"
                    >Cancelado</StatusText>}
                    {(status === "R") && <StatusText status="porConfirmar"  
                    date_in={check_in_date} date_out={check_out_date} client_id={client_id}                 
                    >Por Confirmar</StatusText>}
                 
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




    