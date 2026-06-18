// Header component

import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <div className="header-spacer" />
      <div className="header-title">Resume builder</div>
      <button className="download-button">Download</button>
    </div>
  );
}
