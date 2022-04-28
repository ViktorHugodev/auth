import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      main: "#ff0000",
      600: "#ff0000",
      dash: "#BA0707",
    },
    gray: {
      bgInput: "#060606",
      bgButton: "#2D2D2D",
      dash: "#2E2E2E",
    },
    bgSidebar: "#121212",

    blue: {
      100: "#46D0D0",
      200: "#46D0D0",
      300: "#46D0D0",
      400: "#46D0D0",
      500: "#46D0D0",
      600: "#46D0D0",
      700: "#46D0D0",
      800: "#46D0D0",
      900: "#46D0D0",
    },
  },
  fonts: {
    heading: "Poppins, Proxima Nova, sans-serif",
    body: "Poppins, Proxima Nova, sans-serif",
  },
  components: {
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        _focus: {
          // border:"2px",
          boxShadow: 0,
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            // border: "2px solid",
            _placeholder:{
              color: "white",
              fontSize: ".8rem",
              opacity: 0.5,
            },
            _focus: {
         
              opacity: 0.4,
            },
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "bgSidebar",
        color: "gray.50",
      },
    },
  },
});

