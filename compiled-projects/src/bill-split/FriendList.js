import React from "react";

const FriendList = ({ friends }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Friends List</h1>
      <div className="w-1/2 flex flex-col">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="flex items-center justify-between p-4 m-2 bg-gray-100 rounded shadow-md"
          >
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={friend.image}
                alt={friend.name}
              />
              <span className="font-medium text-lg">{friend.name}</span>
            </div>

            {friend.balance < 0 && (
              <p className="text-red-500">git
                You owe {Math.abs(friend.balance)} P{friend.name} Pesos
              </p>
            )}

            {friend.balance > 0 && (
              <p className="text-green-500">
                You owe {Math.abs(friend.balance)} P{friend.name} Pesos
              </p>
            )}

            {friend.balance === 0 && (
              <p className="text-gray-500">
                You are {Math.abs(friend.balance)} P{friend.name} Pesos are even
              </p>
            )}

            <span className="font-medium text-lg">
              ${friend.balance.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
