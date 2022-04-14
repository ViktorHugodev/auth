
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
    heading: 'Proxima Nova, sans-serif',
    body: 'Proxima Nova, sans-serif'
  },
  styles: {
		// global: {
		// 	body: {
		// 		bg: '#181818',
		// 		color: 'gray.50',
		// 	},
		// },
	},
}) 