import React, { useState, useEffect } from "react";

const AddEntryModal = ({ isOpen, onClose, onAddEntry }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !imageUrl || !content) {
      setError("All fields are required");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (date > today) {
      setError(
        "The date must be today or before only. Please select a another date."
      );
      return;
    }

    const entries = JSON.parse(localStorage.getItem("dairyCards")) || [];
    const alreadyExists = entries.some((entry) => entry.date === date);

    if (alreadyExists) {
      setError(
        "An entry for this date already exists. Please return tomorrow."
      );
      return;
    }

    const newEntry = { title, date, imageUrl, content };
    entries.push(newEntry);
    localStorage.setItem("dairyCards", JSON.stringify(entries));
    onAddEntry(newEntry);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setDate("");
      setImageUrl("");
      setContent("");
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-slate-900 p-6 rounded-tr-3xl rounded-bl-3xl shadow-xl w-full max-w-md font-sans">
        <h2 className="text-xl font-bold mb-4 text-gray-400">Add Entry</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-500 font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-slate-800 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 font-semibold">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 border border-slate-800 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 font-semibold">
              Image URL
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 p-2 border border-slate-800 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-500 font-semibold">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 p-2 border border-slate-800 rounded w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-tr-xl rounded-bl-xl mr-2 transition duration-300 ease-in-out hover:bg-red-800 hover:text-gray-100 font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-tr-xl rounded-bl-xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-800 font-bold hover:font-bold"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;
