import { useState } from 'react'
// import {createBrowser}

import { Route, Routes, NavLink, } from 'react-router'

import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import ContactDetails from './Components/ContactDetails'
import Instagram from './Components/Instagram'
import Twitter from './Components/Twitter'
import Facebook from './Components/Facebook'
import Whatsapp from './Components/Whatsapp'



function App() {
  return (
    <>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/">Home</NavLink>  | {" "}
        <NavLink to="/contact">Contact</NavLink>  | {" "}
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Route */}
        <Route path="/contact/:name/:subject/:phoneNumber/:high/:enter/:status" element={<ContactDetails />} />

        <Route path="/about" element={<About />} >
          <Route index element={<Instagram />}/>
          <Route path='twitter' element={<Twitter />}/>
          <Route path='facebook' element={<Facebook />}/>
          <Route path='whatsapp' element={<Whatsapp />}/>
        </Route>
      </Routes>
    </>


  );
}
export default App;
