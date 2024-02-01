import { useState } from "react";
//import Main component page
import Main from "./components/Main";
//import Header component page
import Header from "./components/Header";
//import Footer component page
import Footer from "./components/Footer";
//import Hero component page
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;
