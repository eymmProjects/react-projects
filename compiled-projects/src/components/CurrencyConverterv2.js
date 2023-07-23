import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        const firstCurrency = Object.keys(response.data.rates)[0];
        setCurrencies([response.data.base, ...Object.keys(response.data.rates)]);
        setFromCurrency(response.data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(response.data.rates[firstCurrency]);
      })
      .catch(error => {
        console.error('Error fetching exchange rate: ', error);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
          setExchangeRate(response.data.rates[toCurrency]);
        })
        .catch(error => {
          console.error('Error fetching exchange rate: ', error);
        });
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value);
  }

  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-80">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-bold text-gray-700">From:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="number"
            value={amount}
            onChange={handleFromAmountChange}
          />
          <select
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            {currencies.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">To:</label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="number"
            value={(amount * exchangeRate).toFixed(2)}
            readOnly
          />
          <select
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            {currencies.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
