import React from "react";
import { useState } from "react";
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
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Design />
        <Hero />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
