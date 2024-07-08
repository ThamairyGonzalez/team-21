import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  Nosotros  from "./componets/nosotros/Nosotros.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { themeCustom } from "./assets/theme/themeCustom.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Consulta } from "./componets/consulta/Consulta.jsx";
import { Login } from "./componets/admin/Login.jsx";
import { Admin2 } from "./componets/admin/Admin2.jsx";
import { Admin1 } from "./componets/admin/Admin1.jsx";
import { Interes } from "./componets/sitioInteres/Interes.jsx";
import { Global, css } from "@emotion/react";
import { Bienvenida } from "./componets/admin/Bienvenida.jsx";



const router=createBrowserRouter([
  { 
    path:"/",
    element:<App/>,
    errorElement:<h1>Error</h1>
  },
  {
    path:'/consulta',
    element:<Consulta/>,
  },
   
  {
    path:'/nosotros',
    element:<Nosotros/>,
  },
 
  
  {
    path:'/interes',
    element:<Interes/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },
  {
    path:'/admin/Admin1',
    element:<Admin1/>,
  },
  {
    path:'/admin/Admin2',
    element:<Admin2/>,
  },
  {
    path:'/admin/home',
    element:<Bienvenida/>,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeCustom}>
    <Global
    styles={css`
      @font-face{
      font-family:'MiFuente';
      src:url('/fonts/poppins/Poppins-Regular.ttf);
      font-weight:normal;
      font-style:normal;
      
      }
      `}/>
    <React.StrictMode>
      
     <RouterProvider router={router}/>
     
    </React.StrictMode>
  </ChakraProvider>
);
