import { Component, useState } from "react";
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <CardsList></CardsList>
      <Footer></Footer>
    </>
  );
}

export default App;
