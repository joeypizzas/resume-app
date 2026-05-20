// ResumeBuilder component

import "./ResumeBuilder.css";
import { ResumeBuilderForm } from "../ResumeBuilderForm/ResumeBuilderForm.jsx";
import { FormField } from "../FormField/FormField.jsx";
import { FormFieldsContainer } from "../FormFieldsContainer/FormFieldsContainer.jsx";

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
      <ResumeBuilderForm header="Education">
        <FormField
          fieldHeader="School"
          initialInput="University of Michigan"
        ></FormField>
        <FormField
          fieldHeader="Degree"
          initialInput="BA, Cognitive science and philosophy"
        ></FormField>
        {/* Add date picker */}
        <FormField
          fieldHeader="Location"
          initialInput="Ann Arbor, MI"
        ></FormField>
      </ResumeBuilderForm>
    </div>
  );
}
