// import "./App.css";
// how react works
import "./how-react-works/index.css";

import "./usepopcorn/stylePopcorn.css";
import App1 from "./how-react-works/App";
import AppHooks from "./hooks/App";
import PopApp from "./usepopcorn/App";

import CurrencyConverter from "./components/CurrencyConverter";

//SECTION class-weather

import AppClassWeather from "./class-weather/App";

function App() {
  return (
    <div className="">
      {/* <PopApp /> */}
      {/* <CurrencyConverter /> */}
      {/* <AppHooks /> */}
      <AppClassWeather />
    </div>
  );
}

export default App;
