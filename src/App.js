import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
