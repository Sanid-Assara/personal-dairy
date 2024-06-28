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
      setError("The date cannot be in the future. Please select a valid date.");
      return;
    }

    const entries = JSON.parse(localStorage.getItem("dairyCards")) || [];
    const alreadyExists = entries.some((entry) => entry.date === date);

    if (alreadyExists) {
      setError(
        "An entry for this date already exists. Please try another date."
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
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Entry</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-red-800 hover:text-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-950 hover:text-gray-100"
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
