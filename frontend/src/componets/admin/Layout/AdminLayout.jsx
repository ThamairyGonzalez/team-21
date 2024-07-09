import { Text, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  const isMobil = useBreakpointValue({base:false,sm:true,md:true,lg:true})
  return (
    <div>
      {/* Aquí puedes poner elementos comunes como un menú de navegación */}
      {!isMobil&&<Text>informacion de lo que es generico a todas las capas</Text>}
      <Outlet />
    </div>
  );
};