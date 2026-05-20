// ResumeBuilder component

import "./ResumeBuilder.css";
import { ResumeBuilderForm } from "../ResumeBuilderForm/ResumeBuilderForm.jsx";
import { FormField } from "../FormField/FormField.jsx";

export function ResumeBuilder() {
  return (
    <div className="resume-builder">
      <ResumeBuilderForm header="Personal details">
        <FormField fieldHeader="Name" initialInput="Joey Pizzas"></FormField>
        <FormField
          fieldHeader="Email"
          initialInput="joey@pizzas.com"
        ></FormField>
        <FormField
          fieldHeader="Phone number"
          initialInput="1234567890"
        ></FormField>
        <FormField
          fieldHeader="Location"
          initialInput="New York, NY"
        ></FormField>
      </ResumeBuilderForm>
    </div>
  );
}
