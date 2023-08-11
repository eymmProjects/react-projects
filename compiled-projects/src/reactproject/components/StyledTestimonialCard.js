import React from "react";

const StyledTestimonialCard = ({ image, saying, name }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full border border-gray-200 rounded-md p-4">
      <img src={image} alt="User image" className="w-20 h-20 rounded-full" />
      <p className="mt-1 text-xl font-medium text-gray-800">{saying}</p>
      <p className="mt-1 text-sm text-gray-600">{name}</p>
    </div>
  );
};

export default StyledTestimonialCard;
