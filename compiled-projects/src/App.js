import "./App.css";
// how react works
// import "./how-react-works/index.css";
// import "./usepopcorn/stylePopcorn.css";

// import App1 from "./how-react-works/App";
// import AppHooks from "./hooks/App";
// import PopApp from "./usepopcorn/App";

// import CurrencyConverter from "./components/CurrencyConverter";

//SECTION class-weather

// import AppClassWeather from "./class-weather/App";

//!SECTION React Quiz
import "./react-quiz/index.css";
import QuizApp from "./react-quiz/App";

//SECTION - Bank
import BankApp from "./bank/App";
// import ReactProject from "./reactproject/TestimonialsApp";
import ReactProject from "./reactproject/AlertApp";

function App() {
  return (
    <div className="">
      {/* <PopApp /> */}
      {/* <CurrencyConverter /> */}
      {/* <AppHooks /> */}
      {/* <AppClassWeather /> */}
      {/* <BankApp /> */}
      {/* <ReactProject /> */}
      <QuizApp />
    </div>
  );
}

export default App;
