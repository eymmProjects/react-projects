import React, { useState } from "react";

export const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <h1 className="mb-3">TipCalculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the sevice?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friends the sevice?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

function BillInput({ bill, onSetBill }) {
  return (
    <div className="">
      <label htmlFor="">how Much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="">
      <label htmlFor="">{children}</label>
      <select
        name=""
        id=""
        value={percentage}
        onSelect={onSelect}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was okay 5%</option>
        <option value="10">It was good 10%</option>
        <option value="20">Nicely Done 20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="">
      <h3 className="font-bold text-5xl m-3  ">
        You pay x {bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
