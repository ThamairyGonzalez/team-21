import { extendTheme } from "@chakra-ui/react";

export const themeCustom = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        color: "purple",
        borderRadius: "25px",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        solid: {
          bg: "yellow.300",
          color: "black",
          fontSize: "lg",
          border: "2px solid red",
        },
        "solid-full":{
            bg: "pink.300",
            color: "white",
            fontSize: "xl",
            border: "1px solid purple",
            _hover:{
                bg:"pink.900",
                border:"2px solid black",
                color:"yellow",
            }
        },
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "green", // default is gray
      },
    },
    Input:{
        baseStyle:{
            field:{
                fontSize:'2em',
                color:'red',
                borderRadius:'20px',
                fontWeight:900,
                
            },
        },
        variants:{
            nuevo:{
                field:{

                    fontSize:'1em',
                    color:'purple',
                    border:'1px solid black',
                    borderRadius:'15px',
                    fontWeight:900,
                },
            }
        },
            
    },
  },
  colors: {
    primary: {
      100: "#f7fafc",
      900: "#1a202c",
    },
    secondary: {
      100: "#58295a",
      500: "#3e0b3e",
      900: "#1E011F",
    },
  },
});
