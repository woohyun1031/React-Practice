import React from "react";
import { Routes, Route } from "react-router-dom";

import { Cat } from "./Cat";
import { Dog } from "./Dog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cat" element={<Cat />} />
        <Route path="/" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;
