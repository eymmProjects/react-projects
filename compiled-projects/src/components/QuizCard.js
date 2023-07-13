import React, { useState } from "react";

const Card = ({ content, selectedID, setSelectedID }) => {
  const { id, question, answer } = content;

  const handleClick = () => {
    setSelectedID(id);
  };

  return (
    <div className="">
      <div
        onClick={handleClick}
        className={`cursor-pointer flex items-center justify-center
               h-48 w-64 m-4 shadow-lg rounded transform transition-all
               duration-300 ease-in-out
               ${
                 id === selectedID ? "bg-red-500" : "bg-blue-500"
               } text-white text-2xl font-bold`}
      >
        <p className="text-center p-3">
          {id === selectedID ? answer : question}
        </p>
      </div>
    </div>
  );
};

export const QuizCard = () => {
  const [selectedID, setSelectedID] = useState(null);

  const flashcards = [
    { id: 1, question: "What is the capital of France?", answer: "Paris" },
    { id: 2, question: "What is the capital of Germany?", answer: "Berlin" },
    {
      id: 3,
      question: "What is the capital of Australia?",
      answer: "Canberra",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {flashcards.map((data) => (
        <Card
          key={data.id}
          content={data}
          selectedID={selectedID}
          setSelectedID={setSelectedID}
        />
      ))}
    </div>
  );
};
