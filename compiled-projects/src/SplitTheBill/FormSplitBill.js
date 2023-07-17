import React from "react";

function FormSplitBill({ selectedFriend }) {
  return (
    <form action="" className="w-72 mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">
        Split a bill with {selectedFriend.name}
      </h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium mb-2">
          Name:
        </label>
        <input
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
            type="number"
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
          id="payment"
          name="payment"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="user">Your</option>
          <option value="friend">Friend</option>
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
