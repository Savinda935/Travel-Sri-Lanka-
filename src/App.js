import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import TravelHome from "./pages/travelhome";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TravelHome />} />
      </Routes>
    </Router>
  );
}

export default App;
