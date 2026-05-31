// ResumeContainer component

import "./ResumeContainer.css";
import { ResumeBuilder } from "../ResumeBuilder/ResumeBuilder.jsx";
import { ResumePreviewContainer } from "../ResumePreviewContainer/ResumePreviewContainer.jsx";

export function ResumeContainer() {
  return (
    <div className="resume-container">
      <ResumeBuilder></ResumeBuilder>
      <ResumePreviewContainer></ResumePreviewContainer>
    </div>
  );
}
