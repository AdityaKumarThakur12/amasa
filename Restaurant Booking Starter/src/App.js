import React from "react";
import Setting from "./pages/settings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Restaurent from "./pages/addRestaurent";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "1rem", width: "200px", borderRight: "1px solid #ccc" }}>
          <ul>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </nav>
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/settings" element={<Setting/>} />
            <Route path="/booking" element={<div>Booking Page</div>} />
            <Route path='/add' element={<Restaurent/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;