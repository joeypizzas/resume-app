// DatePicker component

import "./DatePicker.css";
import MonthYearPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DatePickerField({ fieldHeader, selected, onChange }) {
  return (
    <div className="field-container">
      <div className="field-header">{fieldHeader}</div>
      <MonthYearPicker
        className="date-picker-field"
        wrapperClassName="date-picker-wrapper"
        selected={selected}
        onChange={onChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      ></MonthYearPicker>
    </div>
  );
}
