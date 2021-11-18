import React from "react";
import About from "./components/About";
import Agent from "./components/Agent";
import Contact from "./components/Contact";
import Header from "./components/Header";
import HowItWork from "./components/HowItWork";
import Properties from "./components/Properties";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navbar/> */}
      <HowItWork/>
      <About/>
      <Agent/>
      <Properties/>
      <Contact/>
    </div>
  );
}

export default App;
