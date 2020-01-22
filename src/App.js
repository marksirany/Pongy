import React from "react";
import "./styles.css";

import Paddle from "./components/Paddle";
import Paddle2 from "./components/Paddle2";

export default function App() {
  return (
    <div className="App">
      <Paddle />
      <Paddle2 />
    </div>
  );
}
