// ResumeBuilder component

import "./ResumeBuilder.css";
import { ResumeBuilderForm } from "../ResumeBuilderForm/ResumeBuilderForm.jsx";
import { FormField } from "../FormField/FormField.jsx";
import { FormFieldsContainer } from "../FormFieldsContainer/FormFieldsContainer.jsx";
import { DatePickerField } from "../DatePicker/DatePicker.jsx";
import { DescriptionField } from "../DescriptionField/DescriptionField.jsx";
import { ButtonContainer } from "../ButtonContainer/ButtonContainer.jsx";
import { ResumeBuilderButton } from "../ResumeBuilderButton/ResumeBuilderButton.jsx";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function ResumeBuilder({
  resumeData,
  onUpdatePersonal,
  onUpdateEducation,
  onUpdateExperience,
  onUpdateSkill,
}) {
  return (
    <div className="resume-builder">
      <ResumeBuilderForm header="Personal details">
        <FormField
          fieldHeader={capitalize(Object.keys(resumeData.personal)[0])}
          value={resumeData.personal.name}
          onChange={(e) =>
            onUpdatePersonal(
              Object.keys(resumeData.personal)[0],
              e.target.value,
            )
          }
        ></FormField>
        <FormField
          fieldHeader={capitalize(Object.keys(resumeData.personal)[1])}
          value={resumeData.personal.email}
          onChange={(e) =>
            onUpdatePersonal(
              Object.keys(resumeData.personal)[1],
              e.target.value,
            )
          }
        ></FormField>
        <FormField
          fieldHeader={capitalize(Object.keys(resumeData.personal)[2])}
          value={resumeData.personal.phone}
          onChange={(e) =>
            onUpdatePersonal(
              Object.keys(resumeData.personal)[2],
              e.target.value,
            )
          }
        ></FormField>
        <FormField
          fieldHeader={capitalize(Object.keys(resumeData.personal)[3])}
          value={resumeData.personal.location}
          onChange={(e) =>
            onUpdatePersonal(
              Object.keys(resumeData.personal)[3],
              e.target.value,
            )
          }
        ></FormField>
      </ResumeBuilderForm>
      <ResumeBuilderForm header="Education">
        {resumeData.education.map((edu) => (
          <FormFieldsContainer key={edu.id}>
            <FormField
              fieldHeader={capitalize(Object.keys(edu)[1])}
              value={edu.school}
              onChange={(e) =>
                onUpdateEducation(edu.id, Object.keys(edu)[1], e.target.value)
              }
            ></FormField>
            <FormField
              fieldHeader={capitalize(Object.keys(edu)[2])}
              value={edu.degree}
              onChange={(e) =>
                onUpdateEducation(edu.id, Object.keys(edu)[2], e.target.value)
              }
            ></FormField>
            <DatePickerField // troubleshoot
              fieldHeader={capitalize(Object.keys(edu)[3])}
              value={edu.startDate}
              onChange={(e) =>
                onUpdateEducation(edu.id, Object.keys(edu)[3], e.target.value)
              }
            ></DatePickerField>
            <DatePickerField // troubleshoot
              fieldHeader={capitalize(Object.keys(edu)[4])}
              value={edu.endDate}
              onChange={(e) =>
                onUpdateEducation(edu.id, Object.keys(edu)[4], e.target.value)
              }
            ></DatePickerField>
            <FormField
              fieldHeader={capitalize(Object.keys(edu)[5])}
              value={edu.location}
              onChange={(e) =>
                onUpdateEducation(edu.id, Object.keys(edu)[5], e.target.value)
              }
            ></FormField>
            <DescriptionField // troubleshoot
              fieldHeader={capitalize(Object.keys(edu)[6])}
              value={edu.description}
              onChange={(e) =>
                onUpdateEducation(edu.id, Object.keys(edu)[6], e.target.value)
              }
            ></DescriptionField>
          </FormFieldsContainer>
        ))}
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
