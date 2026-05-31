// PreviewSection component

import "./PreviewSection.css";

export function PreviewSection({ sectionName, children }) {
  return (
    <div className="preview-section">
      <div className="section-name">{sectionName}</div>
      {children}
    </div>
  );
}
