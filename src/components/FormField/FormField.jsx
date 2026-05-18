// FormField component

import "./FormField.css";

export function FormField({ fieldHeader, initialInput }) {
  return (
    <div className="field-container">
      <div className="field-header">{fieldHeader}</div>
      <input className="form-field" defaultValue={initialInput}></input>
    </div>
  );
}
