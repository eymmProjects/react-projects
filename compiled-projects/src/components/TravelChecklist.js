import React, { useState } from "react";

const TravelChecklist = () => {
  const [checklist, setChecklist] = useState([
    "Passport",
    "Tickets",
    "Accommodation booking",
  ]);
  const [input, setInput] = useState("");

  const addItem = () => {
    setChecklist([...checklist, input]);
    setInput("");
  };

  const deleteItem = (index) => {
    setChecklist(checklist.filter((item, i) => i !== index));
  };

  const deleteAllItems = () => {
    setChecklist([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      <h1 className="text-4xl font-bold mb-4">Travel Checklist</h1>

      <input
        type="text"
        className="border mb-4 p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex flex-row ">
        <button
          className="px-4 py-2  bg-blue-500 text-white rounded mx-1"
          onClick={addItem}
        >
          Add item
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded mx-1"
          onClick={deleteAllItems}
        >
          Delete All
        </button>
      </div>

      {checklist.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center w-1/2 bg-white my-2 p-4 rounded shadow"
        >
          <span>{item}</span>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => deleteItem(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TravelChecklist;
