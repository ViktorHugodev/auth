
import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {

    red:{
      main:'#ff0000'
    },
    gray: {
      bgInput: '#060606'
    }
  },
  fonts: {
    heading: 'Proxima Nova, Poppins, sans-serif',
    body: 'Proxima Nova, Poppins, sans-serif'
  },
  styles: {
		global: {
			body: {
				bg: 'black',
				color: 'gray.50',
			},
		},
	},
}) 



// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background-color: rgba(0, 0, 0, 0.39);
// background: linear-gradient( 0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.20211834733893552) 40%, rgba(0, 0, 0, 0) 100% );