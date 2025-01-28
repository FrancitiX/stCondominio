import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Payments from "./views/Payments";
import Status from "./views/Status";
import Contact from "./views/Contact";
import Notifications from "./views/Notifications";
import Profile from "./views/Profile";
import Users from "./views/Users";
import PayAdmin from "./views/PayAdmin";
import Fines from "./views/Fines";
import Gates from "./views/Gates"
import Condominiums from "./views/Condominiums";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/status" element={<Status />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/pay-admin" element={<PayAdmin />} />
        <Route path="/fines" element={<Fines />} />
        <Route path="/gates" element={<Gates />} />
        <Route path="/condominiums" element={<Condominiums />} />
      </Routes>
    </Router>
  );
}

export default App;


