// Header component

import "./Header.css";

export function Header({ onDownload }) {
  return (
    <div className="header">
      <div className="header-spacer" />
      <div className="header-title">Resume builder</div>
      <button className="download-button" onClick={onDownload}>
        Download
      </button>
    </div>
  );
}
