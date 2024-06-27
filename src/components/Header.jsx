import React, { useState } from "react";
import AddEntryModal from "./AddEntryModal";

const Header = ({ onAddEntry }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="z-40 bg-slate-900 flex items-center justify-between  mx-auto py-8 px-4 fixed h-20  w-full">
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
          onAddEntry={onAddEntry}
        />
      </header>
    </>
  );
};

export default Header;
