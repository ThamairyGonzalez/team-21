import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { themeCustom } from "./assets/theme/themeCustom.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Consulta } from "./componets/consulta/Consulta.jsx";

const router=createBrowserRouter([
  { 
    path:"/",
    element:<App/>,
    errorElement:<h1>Error</h1>
  },
  {
    path:'/consulta',
    element:<Consulta/>,
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeCustom}>
    <React.StrictMode>
     <RouterProvider router={router}/>
     
    </React.StrictMode>
  </ChakraProvider>
);
