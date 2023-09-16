import AllRoutes from "./routes/AllRoutes";
import "./App.css";
// import Header from "./keynote/Header";
// import { Keynote_Hero } from "./keynote/Keynote_Hero";
// import Home from "./keynote/Home";
// import Home from "./salient/pages/index";
// import { MovieList } from "./pages";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
