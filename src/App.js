import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomeScreen.jsx";
import DestinationScreen from "./components/DestinationScreen.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
