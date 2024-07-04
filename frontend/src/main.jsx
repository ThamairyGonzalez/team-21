import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { themeCustom } from "./assets/theme/themeCustom.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Consulta } from "./componets/consulta/Consulta.jsx";
import { Admin } from "./componets/admin/Admin.jsx";
import { Nosotros } from "./componets/nosotros/Nosotros.jsx";
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
    path:'/admin',
    element:<Admin/>,
  },
  {
    path:'/admin/home',
    element:<Bienvenida/>,
  },
  {
    path:'/nosotros',
    element:<Nosotros/>,
  },

  {
    path:'/interes',
    element:<Interes/>,
  }
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
