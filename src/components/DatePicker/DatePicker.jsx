// DatePicker component

import "./DatePicker.css";
import MonthYearPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function DatePickerField({ fieldHeader, initialDate }) {
  return (
    <div className="field-container">
      <div className="field-header">{fieldHeader}</div>
      <MonthYearPicker
        className="date-picker-field"
        selected={initialDate}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      ></MonthYearPicker>
    </div>
  );
}
