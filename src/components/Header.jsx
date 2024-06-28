import React, { useState } from "react";
import AddEntryModal from "./AddEntryModal";

const Header = ({ onAddEntry }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="z-40 bg-slate-900 flex items-center justify-center  mx-auto py-8 px-20 fixed h-20  w-full">
        <nav className="flex items-center justify-between w-full max-w-7xl pl-0 pr-20">
          <span className="cursor-pointer  text-2xl  tracking-tight font-extrabold  text-white shadow-md">
            Personal Dairy
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-200 font-sans font-bold text-red-800 px-8 py-2 rounded-tr-xl rounded-bl-xl border-2 border-red-800 transition duration-300 ease-in-out hover:bg-red-800 hover:text-white "
          >
            Add an Entry
          </button>
          <AddEntryModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddEntry={onAddEntry}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
