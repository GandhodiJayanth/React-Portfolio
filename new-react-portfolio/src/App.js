import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './Components/Header';

function App() {
   const location = useLocation();
  return (
    <>
      <Header />
      <Container>
        <AnimatePresence>
           <Routes  location={location} key={location.pathname}>
               <Route path='/' element={<Home />} />
               <Route path='/projects' element={<Projects />} />
               <Route path='/services' element={<Services />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/about' element={<About />} />
           </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;
