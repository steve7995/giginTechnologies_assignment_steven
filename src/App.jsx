import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListPets from "./components/ListPets";
import PetDetails from "./components/PetDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<ListPets />} />
          <Route path="/pets/:id" element={<PetDetails />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
