import React, { useState } from "react";

const Accordion = () => {
  const [active, setActive] = useState("");

  const accordionData = [
    {
      id: 1,
      title: "Accordion Item 1",
      content: "Hello, I am the content for Accordion Item 1",
    },
    {
      id: 2,
      title: "Accordion Item 2",
      content: "Hello, I am the content for Accordion Item 2",
    },
    {
      id: 3,
      title: "Accordion Item 3",
      content: "Hello, I am the content for Accordion Item 3",
    },
  ];

  const toggleActive = (id) => {
    if (active === id) {
      setActive("");
    } else {
      setActive(id);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {accordionData.map((item, index) => (
        <div
          onClick={() => toggleActive(item.id)}
          key={item.id}
          className="border-b border-gray-200 rounded-lg my-2 shadow-lg mb-5"
        >
          <h2 className="text-xl bg-gray-2 py-3 px-5 cursor-pointer flex justify-between items-center">
            <span className="mr-4 text-gray-500">{index + 1}</span>
            {"   "}
            {item.title}
            <span
              className={`transition-transform duration-300 ease-in-out transform ${
                active === item.id ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </h2>
          {active === item.id && (
            <div className="bg-white py-3 px-5">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
