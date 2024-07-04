import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  Nosotros  from "./componets/nosotros/Nosotros.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { themeCustom } from "./assets/theme/themeCustom.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Consulta } from "./componets/consulta/Consulta.jsx";
import { Admin } from "./componets/admin/Admin.jsx";


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
    path:'/cadmin',
    element:<Admin/>,
  },
  {
    path:'/nosotros',
    element:<Nosotros/>,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeCustom}>
    <React.StrictMode>
      
     <RouterProvider router={router}/>
     
    </React.StrictMode>
  </ChakraProvider>
);
