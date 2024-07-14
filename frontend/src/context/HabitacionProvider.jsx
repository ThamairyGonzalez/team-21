import { useEffect, useState } from "react";
import { HabitacionContext } from "./HabitacionContext";
import axios from "axios";

export const HabitacionProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [imgRooms, setImgRooms] = useState([]);
  const [reservas,setReservas] = useState([])

  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await axios.get(
          "https://hotel-oceano.onrender.com/api-room/roomtype/"
        ); // Cambia la URL por tu endpoint
        const imagen = await axios.get("https://hotel-oceano.onrender.com/api-room/roomphoto/");
        setImgRooms(imagen.data);
        setRooms(respuesta.data);
        setCargando(false);
      } catch (error) {
        setError(error.message);
        setCargando(false);
      }
    };

    obtenerDatos();
  }, []); // Asegúrate de que el array de dependencias esté vacío
//recupeacion de informacion de reservaciones para las card
useEffect(()=>{
  const obtenerReservas= async()=>{
    try{
      const response = await axios.get('https://hotel-oceano.onrender.com/api-reservation/reservationroom/');
     
      setReservas(response.data);
    }catch(error){
      setError(error.message);
      setCargando(false);
    }
  };
  obtenerReservas();
},[])






  return (
    <HabitacionContext.Provider value={{ rooms ,imgRooms, reservas}}>
      {children}
    </HabitacionContext.Provider>
  );
};
