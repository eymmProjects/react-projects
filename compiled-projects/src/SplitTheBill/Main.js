import React, { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";

const friends = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    balance: 120.5,
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://via.placeholder.com/150",
    balance: 50.0,
  },
  // Add more friends here...
];

function Main() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col">
        {/* left column */}
        <FriendList
          friendsData={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        <div className="flex flex-col items-center">
          <div className=" flex flex-col">
            {/* <div className="relative flex items-left p-4 m-2 bg-gray-100 rounded shadow-md text-left">
              <FormAddFriend />
            </div> */}
          </div>
        </div>
      </div>

      {/* right column */}
      <div className="w-1/2 pl-4">
        <div className="flex flex-col">
          {selectedFriend && (
            <div className="relative flex items-left p-4 m-2 bg-gray-100 rounded shadow-md text-left">
              <FormSplitBill selectedFriend={selectedFriend} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
