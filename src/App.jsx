import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("dairyCards")) || [];
    setEntries(savedEntries);
  }, []);

  const handleAddEntry = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  return (
    <>
      <Header onAddEntry={handleAddEntry} />
      <CardsList entries={entries} />
      <Footer />
    </>
  );
}

export default App;
