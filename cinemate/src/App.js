import AllRoutes from "./routes/AllRoutes";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <AllRoutes>
        <LandingPage />
      </AllRoutes>
    </div>
  );
}

export default App;
