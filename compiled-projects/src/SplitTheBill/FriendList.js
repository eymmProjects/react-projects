import React, { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
const FriendList = ({ friendsData, onSelection, selectedFriend }) => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(friendsData);

  function handleAddFriend(friend) {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowAddFriend(false);
  }
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Friends List</h1>
      <div className="w-1/2 flex flex-col">
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
        {showAddFriend && (
          <div className="relative flex items-left p-4 m-2 bg-gray-100 rounded shadow-md text-left">
            <FormAddFriend addFriend={handleAddFriend} />
          </div>
        )}
        <Button
          className="button ml-auto px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={handleShowAddFriend}
        >
          {showAddFriend ? " Close" : "Add Friend"}
        </Button>
      </div>
    </div>
  );
};

export default FriendList;

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend && selectedFriend.id === friend.id;
  return (
    <div
      key={friend.id}
      className={`relative flex items-left  p-4 m-2 bg-gray-100 rounded shadow-md text-left ${
        isSelected ? "selected" : ""
      }`}
    >
      <img
        className="w-12 h-12 rounded-full mr-4"
        src={friend.image}
        alt={friend.name}
      />
      <div className="flex flex-col items-left">
        <span className="font-medium text-lg">{friend.name}</span>
        {friend.balance < 0 && (
          <p className="text-red-500">
            You owe {Math.abs(friend.balance)} P{friend.name}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-500">
            You owe {Math.abs(friend.balance)} {friend.name}
          </p>
        )}
        {friend.balance === 0 && (
          <p className="text-gray-500">You and {friend.name} are even</p>
        )}
      </div>
      <Button
        onClick={() => onSelection(friend)}
        className="ml-auto  font-medium text-lg bg-blue-500 p-3 rounded text-white"
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </div>
  );
}
