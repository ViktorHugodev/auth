import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      main: "#ff0000",
      600: "#ff0000",
    },
    gray: {
      bgInput: "#060606",
      bgButton:         "#2D2D2D" 
    },
    bgSidebar: '#121212',
    blue:{
      100: '#46D0D0',
      200: '#46D0D0',
      300: '#46D0D0',
      400: '#46D0D0',
      500: '#46D0D0',
      600: '#46D0D0',
      700: '#46D0D0',
      800: '#46D0D0',
      900: '#46D0D0'
    }
  },
  fonts: {
    heading: "Proxima Nova, Poppins, sans-serif",
    body: "Proxima Nova, Poppins, sans-serif",
  },
  components: {

    Input: {
      variants:{
        outline: {
          field:{
            
            _focus:{
              boxShadow: "0 0 0 2px rgba(255,255,255,0.5)",
            }
          }
        }
      }
    },
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "gray.50",
      },
    },
  },
});

// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background-color: rgba(0, 0, 0, 0.39);
// background: linear-gradient( 0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.20211834733893552) 40%, rgba(0, 0, 0, 0) 100% );
