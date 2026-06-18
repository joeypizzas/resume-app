// App component

import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { ResumeContainer } from "./components/ResumeContainer/ResumeContainer.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const previewRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: "Resume-builder.pdf",
  });

  return (
    <div className="app">
      <Header onDownload={handlePrint}></Header>
      <ResumeContainer previewRef={previewRef}></ResumeContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
