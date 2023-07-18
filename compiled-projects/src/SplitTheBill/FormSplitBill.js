import React, { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByFriend);
  }

  return (
    <form action="" className="w-72 mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">
        Split a bill with {selectedFriend.name}
      </h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium mb-2">
          Bill:
        </label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="your-expense"
            className="block text-lg font-medium mb-2"
          >
            Your expense:
          </label>
          <input
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
            type="text"
            id="your-expense"
            name="your-expense"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="x-expense" className="block text-lg font-medium mb-2">
            {selectedFriend.name} :
          </label>
          <input
            value={paidByFriend}
            disabled
            type="number"
            id="x-expense"
            name="x-expense"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* who's paying the bill */}
      <div className="mb-4">
        <label htmlFor="payment" className="block text-lg font-medium mb-2">
          Who is paying the bill:
        </label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
          id="payment"
          name="payment"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="user">Your</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <div className="mt-4">
        <button className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Split bill
        </button>
      </div>
    </form>
  );
}

export default FormSplitBill;
