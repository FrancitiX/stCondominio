import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
