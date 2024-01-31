import { useState } from "react";
//import Main component page
import Main from "./components/Main";
//import Header component page
import Header from "./components/Header";
//import Footer component page
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
