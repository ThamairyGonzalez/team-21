import { extendTheme } from "@chakra-ui/react";
import { ButtonConfig } from "./ButtonConfig";

export const themeCustom = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
  },

  styles: {
    global: (props) => ({
      fonts: {
        heading: `'Poppins','MiFuente'`,
      },

      "html, body": {
        bg: props.colorMode === "dark" ? "brand.dark" : "brand.light",
        color: props.colorMode === "dark" ? "text.default" : "black",
        fontFamily: "Poppins,sans-serif",
      },
    }),
  },
  components: {
    Button: ButtonConfig,
    Input: {
    
      baseStyle: {
        field: {
          fontSize: "1.2em",
          color: "#040F24",
          borderRadius: "5px",
          fontWeight: 500,
          _focus: {
            border: "1px solid purple",
          },
          _hover: {
            border: "1px solid purple",
          },
        },
      },
      variants: {
        nuevo: {
          field: {
            fontSize: "1em",
            color: "purple",
            border: "1px solid black",
            borderRadius: "15px",
            fontWeight: 900,
            _placeholder: {
              color: 'blue.300',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  
  semanticTokens: {
    colors: {
      primary: {
        200: "#6D99ED",
        400: "#1444A4",
        500: "#0B265B",
        800: "#040F24",
        default: "#E8C888",
        dark: "#DACFF6",
        white: "#FFFFFF",
      },
      secondary: {
        200: "#FFF1D6",
        500: "#FFDE9D",
        600: "#FFC34D",
        default: "#8C65AD",
        dark: "#8C65FF",
      },
      varios:{
        100:"#CEC9C9",
        200:"#E2E2E2",
       
      },
     
      negative:{
        500:"#F2415A",
      },
      fondo_admin:{
        100: '#CEC9C9',
      },
      
      text: {
        dark: "#FFFFFF",
        default: "black",
        gris:"#91929E",
        verydark:"#0A1629",
      },
      buttonText: {
        default: "#0C0AFF",
        dark: "#0C0A47",
      },
      buttonBg: {
        default: "primary.default",
        dark: "#323154",
      },
      brand: {
        light: "primary.500",
        dark: "#FFFFFF",
      },

      status: {
        cancel: "#F5667A1A",
        confirm: "#73E2A41A",
        positive: "#27BE69",
        negative: "#F2415A",
        toconfirm: "#FFCD29",

      },
    },
  },
});
