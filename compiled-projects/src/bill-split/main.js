import React from "react";
import FriendList from "./FriendList";

function main() {
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

  return <FriendList friends={friends} />;
}

export default main;
