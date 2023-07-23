import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

// List of country codes and country names for currency codes.
const countryCodes = {
  USD: "United States Dollar",
  EUR: "Euro",
  JPY: "Japanese Yen",
  // Add more as needed
};

const Todo = () => {
  const [currencies, setCurrencies] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Replace 'your-api-key' with your actual API key
    axios
      .get("https://v6.exchangerate-api.com/v6/your-api-key/latest/USD")
      .then((response) => {
        setCurrencies(Object.keys(response.data.conversion_rates));
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, []);

  const handleConvert = () => {
    // replace 'your-api-key' with your actual API key
    const url = `https://v6.exchangerate-api.com/v6/your-api-key/pair/${source}/${destination}/${amount}`;
    axios
      .get(url)
      .then((response) => {
        setResult(response.data.conversion_result);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  const options = currencies.map((currency) => ({
    value: currency,
    label: `${currency} - ${countryCodes[currency]}`,
  }));

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl mb-4">Currency Converter</h2>
      <input
        className="mb-4 border-2 border-gray-300 p-2 rounded-md"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Select
        className="mb-4 w-64"
        options={options}
        onChange={(selectedOption) => setSource(selectedOption.value)}
        placeholder="Source Currency"
      />
      <Select
        className="mb-4 w-64"
        options={options}
        onChange={(selectedOption) => setDestination(selectedOption.value)}
        placeholder="Destination Currency"
      />
      <button
        className="mb-4 py-2 px-4 bg-blue-500 text-white rounded"
        onClick={handleConvert}
      >
        Convert
      </button>
      {result && (
        <div className="text-xl">
          {`${amount} ${source} is equivalent to ${result} ${destination}`}
        </div>
      )}
    </div>
  );
};

export default Todo;
