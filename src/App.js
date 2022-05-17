
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import React from "react";
import "./App.css";
import ListData from "./components/ListData.json";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
    <Hero />
    <Footer />
  </ChakraProvider>
  );
}

export default App;

/*
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <Footer />
    </ChakraProvider> */