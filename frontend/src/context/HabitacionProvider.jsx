
import { useEffect, useState } from "react";
import { HabitacionContext } from "./HabitacionContext";

const hab=[
    {
        id:1,
        url:'/img/habitacionQueen.png',
        nombre:"Habitacion Queen",
        descripcion:"Habitacion 1",
        precio:100,

    },
    {
        id:2,
        url:'/img/habitacionQueen.png',
        nombre:"Habitacion 2",
        descripcion:"Habitacion 2",
        precio:105,

    },

]


export const HabitacionProvider = ({children}) => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
      // Aquí realizarías la llamada a tu API
      const fetchRooms = async () => {
        try {
          const response = await fetch('https://hotel-oceano.onrender.com/api-room/roomtype/');
          const data = await response.json();
          setRooms(data);
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      };
  
      fetchRooms();
    }, []);
  return (
    <HabitacionContext.Provider value={{hab,rooms}}>
      {children}
    </HabitacionContext.Provider>
  );
};
