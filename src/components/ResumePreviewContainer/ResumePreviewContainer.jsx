// ResumePreviewContainer component

import "./ResumePreviewContainer.css";
import { ResumePreview } from "../ResumePreview/ResumePreview.jsx";

export function ResumePreviewContainer({ resumeData, previewRef }) {
  return (
    <div className="resume-preview-container">
      <ResumePreview
        resumeData={resumeData}
        previewRef={previewRef}
      ></ResumePreview>
    </div>
  );
}
