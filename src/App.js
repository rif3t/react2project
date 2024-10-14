import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicExample from "./nav/navbar";
import Home from "./nav/home";
import Motors from "./nav/motors";
import "./App.css"
import Login from "./nav/login";
import About from "./nav/about";

function App() {
  return (
    <>
  <BrowserRouter>
  
  <BasicExample></BasicExample>
  <Routes>
  <Route index path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/motors" element={<Motors></Motors>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>

  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;