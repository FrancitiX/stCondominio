import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Payments from "./views/Payments";
import Status from "./views/Status";
import Contact from "./views/Contact";
import Notification from "./views/Notification";
import Profile from "./views/Profile";
import Users from "./views/Users";
import PayAdmin from "./views/PayAdmin";
import Penaltys from "./views/Penaltys";
import Gates from "./views/Gates";
import Condominiums from "./views/Condominiums";
import RetrievePassword from "./views/RetrievePassword";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} titie="registro de usuarios" />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/status/:user" element={<Status />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notification/:type" element={<Notification />} />
        <Route path="/profile/:user" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/pay-admin" element={<PayAdmin />} />
        <Route path="/penaltys" element={<Penaltys />} />
        <Route path="/gates" element={<Gates />} />
        <Route path="/condominiums" element={<Condominiums />} />
        <Route path="/forgot-password/:token" element={<RetrievePassword />} />
      </Routes>
    </Router>
  );
}

export default App;


