// App component

import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { ResumeContainer } from "./components/ResumeContainer/ResumeContainer.jsx";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <ResumeContainer></ResumeContainer>
    </div>
  );
}

export default App;
