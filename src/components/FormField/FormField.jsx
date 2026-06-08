// FormField component

import "./FormField.css";

export function FormField({ fieldHeader, value, onChange }) {
  return (
    <div className="field-container">
      <div className="field-header">{fieldHeader}</div>
      <input className="form-field" value={value} onChange={onChange}></input>
    </div>
  );
}
