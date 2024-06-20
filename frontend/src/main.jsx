import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {themeCustom} from "./assets/theme/themeCustom.jsx"
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeCustom}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </ChakraProvider>
);
