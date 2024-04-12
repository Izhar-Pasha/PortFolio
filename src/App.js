import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "./index.js";
import Main from "./Components/Main.jsx";
import Loader from './Components/Loader.jsx';

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" element={<Loader/>} />
     <Route exact path="/Main" element={<Main/>} />
   </Routes>
   </BrowserRouter>
    </>
     );
}

export default App;