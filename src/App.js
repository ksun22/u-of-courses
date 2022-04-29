import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
