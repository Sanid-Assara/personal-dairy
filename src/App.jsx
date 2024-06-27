import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Function to get saved entries from localStorage and sort them by date
    const getAndSortEntries = () => {
      const savedEntries = JSON.parse(localStorage.getItem("dairyCards")) || [];
      // Sort entries by date in descending order (latest date first)
      savedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
      return savedEntries;
    };

    // Set sorted entries on component mount
    setEntries(getAndSortEntries());
  }, []);

  const handleAddEntry = (newEntry) => {
    // Update local state with new entry
    const updatedEntries = [...entries, newEntry];
    // Sort updated entries by date in descending order (latest date first)
    updatedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    // Update state with sorted entries
    setEntries(updatedEntries);
    // Update localStorage with sorted entries
    localStorage.setItem("dairyCards", JSON.stringify(updatedEntries));
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
