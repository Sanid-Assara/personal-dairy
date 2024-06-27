import AddEntryModal from "./AddEntryModal";
import React, { useState, useEffect } from "react";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <>
      <header className="bg-slate-900 flex items-center justify-between  mx-auto py-8 px-4 fixed h-20  w-full">
        <p className="text-white">Personal Dairy</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-800 text-white p-4"
        >
          Add an Entry
        </button>

        <AddEntryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddEntry={handleAddEntry}
        />
      </header>
    </>
  );
};

export default Header;
