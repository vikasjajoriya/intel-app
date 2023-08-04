import React from "react";
import Spotlight from "./Spotlight";
import "./App.css";
const App = () => {
  const target = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Spotlight
          style={{
            top: target.top,
            left: target.left,
            transform: target.transform,
          }}
        />
      </div>
    </div>
  );
};

export default App;
