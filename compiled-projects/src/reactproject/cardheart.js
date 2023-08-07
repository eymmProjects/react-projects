import React, { useState } from "react";
import { AiOutlineComment, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import dogImage from "./imgs/dog.jpg";

function cardheart() {
  // const [like, setLike] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        // src="https://via.placeholder.com/150"
        src={dogImage}
        alt=""
        className="w-32 h-32 mx-auto rounded-fill"
      />

      <h2 className="mt-4 text-xl font-semibold">White Rabbit</h2>
      <p className="text-gray-600">Border Collie</p>
      <div className="mt-6">
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          repudiandae fuga unde praesentium quia. Laborum doloremque, accusamus
          dolorem officia nemo rem error explicabo blanditiis praesentium
          adipisci, voluptatum soluta quidem eius libero a eligendi, unde
          suscipit animi deserunt hic harum? Numquam repudiandae nulla in sed
          saepe! Voluptatem laborum animi soluta saepe?
        </p>
      </div>
      <div className="flex justify-between mx-auto">
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <AiOutlineComment />
        </button>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <AiOutlineHeart />
        </button>
      </div>
    </div>
  );
}

export default cardheart;
