// ResumeBuilderForm component

import "./ResumeBuilderForm.css";
import { FormField } from "../FormField/FormField.jsx";

export function ResumeBuilderForm({ header }) {
  return (
    <div className="resume-builder-form">
      <div className="resume-builder-form-header">{header}</div>
      <FormField fieldHeader="Name" initialInput="Joey Pizzas"></FormField>
      <FormField fieldHeader="Email" initialInput="joey@pizzas.com"></FormField>
      <FormField
        fieldHeader="Phone number"
        initialInput="1234567890"
      ></FormField>
      <FormField fieldHeader="Location" initialInput="New York, NY"></FormField>
    </div>
  );
}
