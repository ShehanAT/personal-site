import React from "react";
import "./App.scss";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
// import "../public/favicon.ico";

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
