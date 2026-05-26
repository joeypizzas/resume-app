// ResumeBuilderButton component

import "./ResumeBuilderButton.css";

export function ResumeBuilderButton({ label, onClick }) {
  return (
    <button type="button" className="resume-builder-button" onClick={onClick}>
      {label}
    </button>
  );
}
