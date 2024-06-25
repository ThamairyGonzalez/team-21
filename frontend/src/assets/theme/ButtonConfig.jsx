// src/components/atomic/button/ButtonConfig.js
import { defineStyleConfig } from '@chakra-ui/react';

export const ButtonConfig = defineStyleConfig({
  
  variants: {
    base: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderRadius: '25px',
      transition: 'all 0.2s',
      bg: 'orange',
      color: 'buttonText',
      _hover: {
        opacity: 0.8,
      },
      _active: {
        transform: 'scale(0.98)',
      },
    },
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? 'primary.default' : 'primary.dark',
      color: props.colorMode === 'dark' ? 'Black' : 'white',
      _hover: {
        bg: props.colorMode === 'dark' ? 'yellow.500' : 'primary.default',
      },
     
      borderRadius:'25px',
    }),
    outline: {
      borderRadius:'25px',
      borderColor: 'yellow.400',
      bg: 'transparent',
      size:'sm',
      color: 'yellow.400',
      _hover: {
        bg: 'yellow.400',
        color:'black',
      },
    },
  
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: 'lg',
      px: 8,
      py: 5,
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
