// ResumeBuilder component

import "./ResumeBuilder.css";
import { ResumeBuilderForm } from "../ResumeBuilderForm/ResumeBuilderForm.jsx";
import { FormField } from "../FormField/FormField.jsx";
import { FormFieldsContainer } from "../FormFieldsContainer/FormFieldsContainer.jsx";
import { DatePickerField } from "../DatePicker/DatePicker.jsx";

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
        <FormFieldsContainer>
          <FormField
            fieldHeader="School"
            initialInput="University of Michigan"
          ></FormField>
          <FormField
            fieldHeader="Degree"
            initialInput="BA, Cognitive science and philosophy"
          ></FormField>
          <DatePickerField
            fieldHeader="Start date"
            initialDate="2015-10"
          ></DatePickerField>
          <DatePickerField
            fieldHeader="End date"
            initialDate="2019-06"
          ></DatePickerField>
          <FormField
            fieldHeader="Location"
            initialInput="Ann Arbor, MI"
          ></FormField>
        </FormFieldsContainer>
      </ResumeBuilderForm>
    </div>
  );
}
