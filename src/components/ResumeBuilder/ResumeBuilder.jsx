// ResumeBuilder component

import "./ResumeBuilder.css";
import { ResumeBuilderForm } from "../ResumeBuilderForm/ResumeBuilderForm.jsx";
import { FormField } from "../FormField/FormField.jsx";
import { FormFieldsContainer } from "../FormFieldsContainer/FormFieldsContainer.jsx";
import { DatePickerField } from "../DatePicker/DatePicker.jsx";
import { DescriptionField } from "../DescriptionField/DescriptionField.jsx";
import { ButtonContainer } from "../ButtonContainer/ButtonContainer.jsx";
import { ResumeBuilderButton } from "../ResumeBuilderButton/ResumeBuilderButton.jsx";

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
            initialInput="BS, Electrical engineering and computer science"
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
          <DescriptionField
            fieldHeader="Description"
            initialInput="University Honors (2018-2019)"
          ></DescriptionField>
        </FormFieldsContainer>
        <ButtonContainer>
          <ResumeBuilderButton
            label="Add +"
            onClick={() => console.log("Clicked")}
          ></ResumeBuilderButton>
          <ResumeBuilderButton
            label="Remove -"
            onClick={() => console.log("Clicked")}
          ></ResumeBuilderButton>
        </ButtonContainer>
      </ResumeBuilderForm>
      <ResumeBuilderForm header="Experience">
        <FormFieldsContainer>
          <FormField
            fieldHeader="Company"
            initialInput="Joey's Pizza Pies"
          ></FormField>
          <FormField
            fieldHeader="Position"
            initialInput="Head pie guy"
          ></FormField>
          <DatePickerField
            fieldHeader="Start date"
            initialDate="2019-09"
          ></DatePickerField>
          <DatePickerField
            fieldHeader="End date"
            initialDate="2026-05"
          ></DatePickerField>
          <FormField
            fieldHeader="Location"
            initialInput="New York, NY"
          ></FormField>
          <DescriptionField
            fieldHeader="Description"
            initialInput="Directly responsible for the creation of hundreds of delicious pizza pies each day."
          ></DescriptionField>
        </FormFieldsContainer>
        <ButtonContainer>
          <ResumeBuilderButton
            label="Add +"
            onClick={() => console.log("Clicked")}
          ></ResumeBuilderButton>
          <ResumeBuilderButton
            label="Remove -"
            onClick={() => console.log("Clicked")}
          ></ResumeBuilderButton>
        </ButtonContainer>
      </ResumeBuilderForm>
      <ResumeBuilderForm header="Skills">
        <FormFieldsContainer>
          <FormField
            fieldHeader="Skill"
            initialInput="Kneading dough"
          ></FormField>
          <FormField
            fieldHeader="Skill"
            initialInput="Tossin' pies"
          ></FormField>
          <FormField
            fieldHeader="Skill"
            initialInput="Operating pizza oven"
          ></FormField>
        </FormFieldsContainer>
        <ButtonContainer>
          <ResumeBuilderButton
            label="Add +"
            onClick={() => console.log("Clicked")}
          ></ResumeBuilderButton>
          <ResumeBuilderButton
            label="Remove -"
            onClick={() => console.log("Clicked")}
          ></ResumeBuilderButton>
        </ButtonContainer>
      </ResumeBuilderForm>
    </div>
  );
}
