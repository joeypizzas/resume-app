// ResumeBuilderForm component

import "./ResumeBuilderForm.css";

export function ResumeBuilderForm({ header, children }) {
  return (
    <div className="resume-builder-form">
      <div className="resume-builder-form-header">{header}</div>
      {children}
    </div>
  );
}
