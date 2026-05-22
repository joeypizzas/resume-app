// DescriptionField component

import "./DescriptionField.css";

export function DescriptionField({ fieldHeader, initialInput }) {
  return (
    <div className="field-container">
      <div className="field-header">{fieldHeader}</div>
      <textarea
        className="description-field"
        defaultValue={initialInput}
      ></textarea>
    </div>
  );
}
