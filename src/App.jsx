import { Component, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}

export default App;
