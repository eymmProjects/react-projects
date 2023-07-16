import React from "react";

const FriendList = ({ friends }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Friends List</h1>
      <div className="w-1/2 flex flex-col">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="relative flex items-left justify-between p-4 m-2 bg-gray-100 rounded shadow-md text-left"
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
            <span className="ml-auto font-medium text-lg">
              {" "}
              {/* Add 'ml-auto' here */}P{friend.balance.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
