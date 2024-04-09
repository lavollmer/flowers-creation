import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Header component page
import Header from "./components/Header";
//import Footer component page
import Footer from "./components/Footer";
//import Hero component page
import Hero from "./components/Hero";
//import Login page
import Login from "./components/Login";
//import Design file
import Design from "./components/DesignBouquet";
import CarouselImages from "./components/reusable/Carousel";
import Works from "./components/Works";
import ChooseUs from "./components/ChooseUs";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CarouselImages />} />
        <Route path="/design" element={<Design />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/works" element={<Works />} />
        <Route path="/chooseus" element={<ChooseUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
