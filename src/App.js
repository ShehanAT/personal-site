import React from "react";
import "./App.scss";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import { hot } from "react-hot-loader";
import "../public/scss/default.scss";
import "../public/scss/layout.scss";

// import "../public/favicon.ico";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
