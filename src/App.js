import React from 'react';
import {Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import "./index.js";
import Main from "./Components/Main.jsx";
import Loader from './Components/Loader.jsx';

function App() {

  return (
    <>
   <HashRouter>
   <Routes>
   <Route exact path="/" element={<Loader/>} />
     <Route exact path="/Main" element={<Main/>} />
   </Routes>
   </HashRouter>
    </>
     );
}

export default App;