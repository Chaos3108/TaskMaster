import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div style={{ width: "250px", minWidth: "250px", background: "#282c34" }}>
        <Navbar />
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
