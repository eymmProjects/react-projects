import React, { useState } from "react";
import Button from "./Button";


function FormAddFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar/cc/48");
  const [balance, setBalance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID;
    if (!name || !image) return;

    // if (name.trim() !== "" && !isNaN(balance) && parseFloat(balance) >= 0) {
    // }

    const newFriend = {
      image: `${image}?=${id}`,
      name,
      balance: parseFloat(balance),
    };
    addFriend(newFriend);
    // console.log(newFriend);
    setName("");
    setImage("https://i.pravatar/cc/48");
  };

  return (
    <div className="w-72 mx-auto">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <label htmlFor="name" className="w-1/3 text-lg font-medium pr-4">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-2/3 px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="balance" className="w-1/3 text-lg font-medium pr-4">
            Image Url:
          </label>
          <input
            value={image}
            type="text"
            id="balance"
            name="imageUrl"
            onChange={(e) => setImage(e.target.value)}
            className="w-2/3 px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormAddFriend;
