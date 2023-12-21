import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import { ChakraProvider, HStack } from '@chakra-ui/react';
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from './components/booking/booking_page';
import ConfirmedBooking from './components/booking/confirmation';
import Footer from './components/footer';
import { useState } from 'react';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const links = [{
    stringLiteral: "Home",
    route: "/"
  },
  {
    stringLiteral: "About",
    route: "/about",
  },
  {
    stringLiteral: "Booking",
    route: "/booking"
  },
  {
    stringLiteral: "Confirmation",
    route:"/confirmation"
  }
  ];

  return (
    <>
      <ChakraProvider>
        <HStack overflow={"scroll"}>
          <Header />
          <Nav links={links} />
        </HStack>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/booking" element={<BookingPage 
          isSubmitted={isSubmitted} 
          setIsSubmitted={setIsSubmitted} 
          bookingData={bookingData}
          setBookingData={setBookingData}/>}></Route>
          <Route path="/confirmation" element ={<ConfirmedBooking isSubmitted={isSubmitted}
          bookingData={bookingData}/>}></Route>
        </Routes>
        <Footer links={links}/>
      </ChakraProvider>

    </>
  );
}


export default App;
