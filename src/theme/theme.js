import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
})

export default theme;