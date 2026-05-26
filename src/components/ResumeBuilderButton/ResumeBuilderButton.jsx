// ResumeBuilderButton component

import "./ResumeBuilderButton.css";

export function ResumeBuilderButton({ label, onClick }) {
  return (
    <button className="resume-builder-button" onClick={onClick}>
      {label}
    </button>
  );
}
