import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [addDays, setAddDays] = useState(0);
  const date = new Date("july 12 2027");
  date.setDate(date.getDate() + addDays);

  return (
    <div className="flex flex-col  items-center justify-center bg-gray-200 size-[500px] w-600 p-5">
      <div className="flex flex-row m-5 counter-counter">
        <button
          className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md"
          onClick={() => setCount((c) => c - 1)}
        >
          Decrease
        </button>
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Counter: {count}
        </h2>
        <div>
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md"
            onClick={() => setCount((c) => c + 1)}
          >
            Increase
          </button>
        </div>
      </div>
      <div className="flex flex-row  counter-counter">
        <button
          className="px-4 py-2 ml-2 text-white bg-red-500 rounded-md"
          onClick={() => setAddDays((c) => c - count)}
        >
          Decrease
        </button>
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Counter: {addDays}
        </h2>
        <div>
          <button
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md"
            onClick={() => setAddDays((c) => c + count)}
          >
            Increase
          </button>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${addDays} days from today is `
            : `${Math.abs(addDays)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </h2>
    </div>
  );
};

export default Counter;
