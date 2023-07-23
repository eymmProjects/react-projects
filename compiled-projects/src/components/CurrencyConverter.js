import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [currencyData, setCurrencyData] = useState({
    fromCurrency: "USD",
    toCurrency: "EUR",
    amount: 1,
    result: "",
  });

  const fetchExchangeRates = async () => {
    try {
      const response = await axios.get(
        `https://api.frankfurter.app/latest?from=${currencyData.fromCurrency}`
      );
      setExchangeRates(response.data.rates);
    } catch (error) {
      console.error("Failed to fetch exchange rates", error);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [currencyData.fromCurrency]);

  const convertCurrency = () => {
    setCurrencyData((prevState) => ({
      ...prevState,
      result: prevState.amount * exchangeRates[prevState.toCurrency],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrencyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <input
        className="text-black-100"
        type="number"
        name="amount"
        value={currencyData.amount}
        onChange={handleInputChange}
      />
      <select
        name="fromCurrency"
        value={currencyData.fromCurrency}
        onChange={handleInputChange}
      >
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <select
        name="toCurrency"
        value={currencyData.toCurrency}
        onChange={handleInputChange}
      >
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <button onClick={convertCurrency}>Convert</button>
      <p>
        {currencyData.amount} {currencyData.fromCurrency} ={" "}
        {currencyData.result} {currencyData.toCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
