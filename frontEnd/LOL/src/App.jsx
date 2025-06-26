import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';
import Login from './page/Authentication/Login';
import Signup from './page/Authentication/Signup';  
import Contact from '../src/page/Home/Contact';
import About from '../src/page/Home/Aboutus';   
import Service from '../src/page/Home/Service';

function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/service" element={<Service />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
       </BrowserRouter> 
    </>
  )
}

export default App
