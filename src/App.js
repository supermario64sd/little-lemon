import './App.css';
import Article from './components/article';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import Reservation from './components/reservations';
import Section from './components/section';
import Home from './components/home';
import About from './components/about';
import Menu from './components/menu';
import OrderOnline from './components/order_online';
import LogIn from './components/log_in';
import { ChakraProvider, VStack, HStack, Box, Grid, GridItem } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import { repeat } from 'fontawesome';
import Hero from './components/hero';
import Specials from './components/specials';

function App() {
  const links = [{
    stringLiteral: "Home",
    route: "/"
  },
  {
    stringLiteral: "About",
    route: "/about"
  }
  ];

  return (
    <>
      <ChakraProvider>
        <HStack>
          <Header />
          <Nav links={links} />
        </HStack>
          <Hero />
        <HStack>
          <Specials/>
        </HStack>
        <Box>
        </Box>
      </ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}


export default App;
