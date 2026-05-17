// App component

import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { ResumeContainer } from "./components/ResumeContainer/ResumeContainer.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <ResumeContainer></ResumeContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
