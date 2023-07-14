import "./App.css";
import { QuizCard } from "./components/QuizCard";
import StaticApp from "./travelComponent/StaticApp";
import Accordion from "./components/Accordion";
import { TipCalculator } from "./components/TipCalculator";
function App() {
  return (
    <div>
      {/* <StaticApp /> */}
      {/* <Accordion /> */}
      <TipCalculator />
    </div>
  );
}

export default App;
