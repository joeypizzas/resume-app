// PreviewItem component

import "./PreviewItem.css";

export function PreviewItem({
  organization,
  location,
  startDate,
  endDate,
  positionOrStudy,
  description,
}) {
  return (
    <div className="preview-item">
      <div className="organization-location-date">
        <div className="organization-location">
          <div className="organization">{organization}</div>
          <div className="location">{location}</div>
        </div>
        <div className="date">
          {startDate} - {endDate}
        </div>
      </div>
      <div className="position-or-study">{positionOrStudy}</div>
      <div className="description">
        {description?.includes("\n")
          ? description
              .split("\n")
              .filter((line) => line.trim())
              .map((line, i) => <div key={i}>{line.trim()}</div>)
          : description}
      </div>
    </div>
  );
}
