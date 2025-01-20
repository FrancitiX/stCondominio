import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Users from "./views/Users";
import Payments from "./views/Payments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Payments" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default App;
