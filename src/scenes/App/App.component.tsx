import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
