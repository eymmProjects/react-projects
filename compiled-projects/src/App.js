import "./App.css";
// how react works
import "./how-react-works/index.css";

import "./usepopcorn/stylePopcorn.css";
import App1 from "./how-react-works/App";

import PopApp from "./usepopcorn/App";

import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="">
      {/* <PopApp /> */}

      <CurrencyConverter />
    </div>
  );
}

export default App;
