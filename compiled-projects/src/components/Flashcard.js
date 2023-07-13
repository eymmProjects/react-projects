import React, { useState } from "react";

const Flashcard = ({ question, answer }) => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div
      className={`w-64 h-96 bg-white rounded-lg shadow-md cursor-pointer 
                  flex items-center justify-center text-2xl font-bold 
                  transform transition-transform duration-700 
                  ${flip ? "rotate-y-180" : ""}`}
      onClick={handleFlip}
    >
      <div className="absolute w-full h-full bg-blue-500 rounded-lg shadow-md flex items-center justify-center text-white">
        <span>{question}</span>
      </div>

      <div
        className={`absolute w-full h-full bg-red-500 rounded-lg shadow-md flex items-center justify-center text-white transform rotate-y-180`}
      >
        <span>{answer}</span>
      </div>
    </div>
  );
};

const Quiz = () => {
  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the capital of Germany?", answer: "Berlin" },
    { question: "What is the capital of Australia?", answer: "Canberra" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </div>
  );
};

export default Quiz;
