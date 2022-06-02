import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Start from "./Start";

function App() {
  const [name, setName] = React.useState("르탄이");

  return (
    <div
      className="App"
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}
    >
      <Start name={name} />
    </div>
  );
}

export default App;
