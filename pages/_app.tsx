import type { AppProps } from 'next/app'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'


 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Sidebar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp



