import React from "react";

function Card({ image, title, description, hobbies }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-500 border-2">
      <img src={image} alt="Card" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          {hobbies.map((hobby) => (
            <span
              key={hobby}
              className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

//!SECTION

// import "./App.css";
// import Card from "./Card";
// import imageSrc from "./assets/images/Profile.png";

// function App() {
//   const hobbies = ["Reading", "Coding", "Traveling", "Photography"];
//   return (
//     <div>
//       <Card
//         image={imageSrc}
//         title="Emmanuel P. Javellana"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//         hobbies={hobbies}
//       />
//     </div>
//   );
// }
// export default App;
