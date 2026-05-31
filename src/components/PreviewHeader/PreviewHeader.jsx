// PreviewHeader component

import "./PreviewHeader.css";

export function PreviewHeader({ location, name, phone, email }) {
  return (
    <div className="preview-header">
      <div className="preview-location">{location}</div>
      <div className="preview-name">{name}</div>
      <div className="preview-phone-email">
        <div className="preview-phone">{phone}</div>
        <div className="preview-email">{email}</div>
      </div>
    </div>
  );
}
