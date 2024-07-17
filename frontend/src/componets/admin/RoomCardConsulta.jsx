import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Input,
  Button,
  Flex,
  Center,
} from "@chakra-ui/react";
import { StatusText } from "./StatusText.jsx";

import { formatDate } from "../../assets/formatDate.js";
import { useEffect, useState } from "react";
import { RoomCardConfirmModal } from "./RoomCardConfirmModal.jsx";

export const RoomCardConsulta = ({
  // id,
  // client,
  // company,
  // start_date,
  // end_date,
  // people,
  // status,
  // room_types,
  consulta,
}) => {
  const BASE_URL = "https://hotel-oceano.onrender.com";
  const [roomNumber, setRoomNumber] = useState("");
  const [roomTipo, setRoomTypes] = useState({});

  console.log(consulta);

  const getRoomType= async(id)=>{
    try{
      const res = await fetch(`${BASE_URL}/api-room/roomtype/${id}`);
      const room = await res.json();
      return room
      // setRoomType(room)
    }catch(error){
      console.log("error al obtner datos del roomtype");
    }
  }

  useEffect(() => {
    const fetchRoomTypes = async () => {
      const types = {};
      for (const r of consulta.room_types) {
        if (!types[r.room_type_id]) {
          types[r.room_type_id] = await getRoomType(r.room_type_id);
        }
      }
      setRoomTypes(types);
    };

    fetchRoomTypes();
  }, [consulta.room_types]);

  
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  
  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  const cliente = consulta.client.is_company? consulta.client.company.name : consulta.client.individual.first_name;

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
      <Box display="flex" alignItems="center">
        {/* Imagen de la habitación */}
        <Image src="/icons/room.png" alt="room" width="48px" height="48px" />

        {/* Contenedor para los títulos y los textos */}
        <Box m={1}>
          <Box display="flex">
            {/* Título tipo de habitación */}

            <Box mr="4">
              <Text fontSize="12px" fontWeight="bold" color="text.gris">
                Reserva:
              </Text>

              <Text fontSize="14px" color="text.verydark">
                {consulta.room_types.map((r) => (
                
                  <Box key={r.id}>
                    
                    <Text>Tipo:  {roomTipo[r.room_type_id]?.type || 'Cargando...'}</Text>
                    <Text>Cant: {r.quantity}</Text>
                  </Box>
                ))}
              </Text>
            </Box>
            <Box m={2}>
              {/* Nombre del cliente */}
              <Text fontSize="14px" color="text.verydark">Cliente: </Text>
                <Text>{cliente}</Text>
              {/* {consulta.client.is_company
               ? <Text>{consulta.client.company.name} </Text>
               : <Text>{consulta.client.individual.first_name} </Text>
                             
              }  */}
                {/* {roomType[0].room_type_id} */}
              
            </Box>

            <Box>
              <Text fontSize="12px" color="text.gris" fontWeight="bold">
                Cod Reserva
              </Text>
              <Text fontSize="14px" color="text.verydark">
                {consulta.id.slice(-6)}
              </Text>
            </Box>
          </Box>
          <Box fontSize="14px" color="text.verydark" m={2}>
            <Text>Ingreso: {consulta.start_date}</Text>
            <Text>Egreso: {consulta.end_date}</Text>
          </Box>
        </Box>
      </Box>

      {/* Grid para N° Habitación, Confirmado y Status */}

      <Flex gap="10px" marginTop="16px" justify={"space-around"}>
        <Flex flexDirection={"column"}>
          <Text fontSize="12px" fontWeight="bold" color="text.gris">
            N° Personas
          </Text>
          <Text fontSize="14px" color="text.verydark">
            {consulta.people}
          </Text>
        </Flex>

        <Flex flexDirection={"column"}>
          <Button varian="filled" m={2} onClick={openConfirmModal}>
            Reservar
          </Button>
          <Button varian="filled" m={2}>
            Cancelar
          </Button>
        </Flex>
      </Flex>

      <Box>
        <Text fontSize="14px" fontWeight="bold" color="#20102B">
          {" "}
          Observaciones{" "}
        </Text>

        <Input
          placeholder="Escribe tus observaciones aquí"
          marginTop="8px"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px",
            gap: "12px",
            width: "100%",
            height: "44px",
            boxShadow: "0px 1px 2px 0px #4D40551A",
            borderRadius: "4px",
            flex: "none",
            order: "0",
            flexGrow: "1",
            border: "1px solid #4D40551A",
          }}
        />
      </Box>
      <RoomCardConfirmModal 
      isOpen={isConfirmModalOpen} 
      onClose={closeConfirmModal} 
      estado={status} 
      date_in={consulta.start_date}
      date_out={consulta.end_date}
      client = {cliente}
      client_id={consulta.client.id}
      codRes = {consulta.id}
      />
    </Box>
    
  );
};
