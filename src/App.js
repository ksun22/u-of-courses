import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
    </ChakraProvider>
  );
}

export default App;
