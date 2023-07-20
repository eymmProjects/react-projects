import React, { useState } from "react";

export const TextExpander = ({ text, length = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= length) {
    return <p>{text}</p>;
  }

  return (
    <p className="">
      {isExpanded ? text : `${text.split(" ").slice(0, length)}...`}
      <span
        className="text-indigo-500 cursor-pointer  "
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </span>
    </p>
  );
};
