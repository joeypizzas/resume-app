// ResumePreviewContainer component

import "./ResumePreviewContainer.css";
import { ResumePreview } from "../ResumePreview/ResumePreview.jsx";

export function ResumePreviewContainer({ resumeData }) {
  return (
    <div className="resume-preview-container">
      <ResumePreview resumeData={resumeData}></ResumePreview>
    </div>
  );
}
