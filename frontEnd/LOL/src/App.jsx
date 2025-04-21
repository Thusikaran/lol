import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';

function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
               <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
       </BrowserRouter> 
    </>
  )
}

export default App
