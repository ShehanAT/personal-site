import React from "react";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
    </div>
  );
}

export default App;
