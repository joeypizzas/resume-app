// ResumeContainer component

import "./ResumeContainer.css";
import { ResumeBuilder } from "../ResumeBuilder/ResumeBuilder.jsx";
import { ResumePreview } from "../ResumePreview/ResumePreview.jsx";

export function ResumeContainer() {
  return (
    <div className="resume-container">
      <ResumeBuilder></ResumeBuilder>
      <ResumePreview></ResumePreview>
    </div>
  );
}
