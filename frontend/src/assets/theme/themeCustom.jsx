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
     
     
     'html, body': {
        bg: props.colorMode === "dark" ? "brand.dark" : "brand.light",
        color: props.colorMode === "dark" ? "text.default" : "black",
        fontFamily:'Poppins,sans-serif',
      },
    
    }),
  },
  components: {
 
    Button: ButtonConfig,
     Input: {
      baseStyle: {
        field: {
          fontSize: "1.2em",
          color: "#9B959F",
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
          },
        },
      },
    },
  },

  semanticTokens: {
    colors: {
      primary: {
        200:'#6D99ED',
        500:'#0B265B',
        800:'#040F24',
        default: "#E8C888",
        dark: "#DACFF6",
      },
      secondary: {
        500:'#FFDE9D',
        600:'#FFC34D',
        default: "#8C65AD",
        dark: "#8C65FF",
      },
      
      text: {
        dark: "#FFFFFF",
        default: "black",
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
    },
  },
});
