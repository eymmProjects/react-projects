import AllRoutes from "./routes/AllRoutes";
import "./App.css";
import Header from "./keynote/Header";
import { Keynote_Hero } from "./keynote/Keynote_Hero";
import Home from "./keynote/Home";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <AllRoutes />
      <Keynote_Hero /> */}
      {/* <LandingPage /> */}
      <Home />
      <AllRoutes />
    </div>
  );
}

export default App;
