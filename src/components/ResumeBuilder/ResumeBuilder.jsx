// ResumeBuilder component

import "./ResumeBuilder.css";
import { ResumeBuilderForm } from "../ResumeBuilderForm/ResumeBuilderForm.jsx";

export function ResumeBuilder() {
  return (
    <div className="resume-builder">
      <ResumeBuilderForm header="Personal details"></ResumeBuilderForm>
    </div>
  );
}
