import React, { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      onClick={handleFlip}
      className={`cursor-pointer flex items-center justify-center 
                 h-48 w-64 m-4 shadow-lg rounded transform transition-all 
                 duration-300 ease-in-out  
                 ${
                   showAnswer ? "bg-red-500" : "bg-blue-500"
                 } text-white text-2xl font-bold`}
    >
      <p className="text-center">
        {showAnswer ? flashcard.answer : flashcard.question}
      </p>
    </div>
  );
};

export const Quiz = () => {
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
      {flashcards.map((flashcard) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </div>
  );
};
