import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MBMain from "./TheMovieBox/main";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<MBMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
