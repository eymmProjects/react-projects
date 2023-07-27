import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;
    default:
      throw new Error("Unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App min-h-screen bg-gray-200 flex flex-col items-center justify-center space-y-5 p-5 m-3">
      <h1 className="text-2xl font-bold">useReducer Bank Account</h1>
      <p className="text-xl">
        Balance: <span className="font-bold">{balance}</span>
      </p>
      <p className="text-xl">
        Loan: <span className="font-bold">{loan}</span>
      </p>

      <div className="space-y-3 m-3">
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>

        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          onClick={() => {
            dispatch({ type: "deposit", payload: 150 });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>

        <button
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          onClick={() => {
            dispatch({ type: "withdraw", payload: 50 });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>

        <button
          className="bg-purple-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          onClick={() => {
            dispatch({ type: "requestLoan", payload: 5000 });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>

        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>

        <button
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </div>
    </div>
  );
}
