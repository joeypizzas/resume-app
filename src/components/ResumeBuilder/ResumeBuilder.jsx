// ResumeBuilder component

import "./ResumeBuilder.css";
import { ResumeBuilderForm } from "../ResumeBuilderForm/ResumeBuilderForm.jsx";
import { FormField } from "../FormField/FormField.jsx";
import { FormFieldsContainer } from "../FormFieldsContainer/FormFieldsContainer.jsx";
import { DatePickerField } from "../DatePicker/DatePicker.jsx";
import { DescriptionField } from "../DescriptionField/DescriptionField.jsx";
import { ButtonContainer } from "../ButtonContainer/ButtonContainer.jsx";
import { ResumeBuilderButton } from "../ResumeBuilderButton/ResumeBuilderButton.jsx";
import { parse, format } from "date-fns";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeAndSplit(str) {
  return str.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
}

function parseDate(str) {
  return str ? parse(str, "MM/yyyy", new Date()) : null;
}

function formatDate(date) {
  return date ? format(date, "MM/yyyy") : "";
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
            <DatePickerField
              fieldHeader={capitalizeAndSplit(Object.keys(edu)[3])}
              selected={parseDate(edu.startDate)}
              onChange={(date) =>
                onUpdateEducation(edu.id, Object.keys(edu)[3], formatDate(date))
              }
            ></DatePickerField>
            <DatePickerField
              fieldHeader={capitalizeAndSplit(Object.keys(edu)[4])}
              selected={parseDate(edu.endDate)}
              onChange={(date) =>
                onUpdateEducation(edu.id, Object.keys(edu)[4], formatDate(date))
              }
            ></DatePickerField>
            <FormField
              fieldHeader={capitalize(Object.keys(edu)[5])}
              value={edu.location}
              onChange={(e) =>
                onUpdateEducation(edu.id, Object.keys(edu)[5], e.target.value)
              }
            ></FormField>
            <DescriptionField
              fieldHeader={capitalize(Object.keys(edu)[6])}
              value={edu.description.join("\n")}
              onChange={(e) =>
                onUpdateEducation(
                  edu.id,
                  Object.keys(edu)[6],
                  e.target.value.split("\n"),
                )
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
        {resumeData.experience.map((exp) => (
          <FormFieldsContainer key={exp.id}>
            <FormField
              fieldHeader={capitalize(Object.keys(exp)[1])}
              value={exp.company}
              onChange={(e) =>
                onUpdateExperience(exp.id, Object.keys(exp)[1], e.target.value)
              }
            ></FormField>
            <FormField
              fieldHeader={capitalize(Object.keys(exp)[2])}
              value={exp.position}
              onChange={(e) =>
                onUpdateExperience(exp.id, Object.keys(exp)[2], e.target.value)
              }
            ></FormField>
            <DatePickerField
              fieldHeader={capitalizeAndSplit(Object.keys(exp)[3])}
              selected={parseDate(exp.startDate)}
              onChange={(date) =>
                onUpdateExperience(
                  exp.id,
                  Object.keys(exp)[3],
                  formatDate(date),
                )
              }
            ></DatePickerField>
            <DatePickerField
              fieldHeader={capitalizeAndSplit(Object.keys(exp)[4])}
              selected={parseDate(exp.endDate)}
              onChange={(date) =>
                onUpdateExperience(
                  exp.id,
                  Object.keys(exp)[4],
                  formatDate(date),
                )
              }
            ></DatePickerField>
            <FormField
              fieldHeader={capitalize(Object.keys(exp)[5])}
              value={exp.location}
              onChange={(e) =>
                onUpdateExperience(exp.id, Object.keys(exp)[5], e.target.value)
              }
            ></FormField>
            <DescriptionField
              fieldHeader={capitalize(Object.keys(exp)[6])}
              value={exp.description.join("\n")}
              onChange={(e) =>
                onUpdateExperience(
                  exp.id,
                  Object.keys(exp)[6],
                  e.target.value.split("\n"),
                )
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
      <ResumeBuilderForm header="Skills">
        {resumeData.skills.map((sk) => (
          <FormFieldsContainer>
            <FormField
              key={sk.id}
              fieldHeader={capitalize(Object.keys(sk)[1])}
              value={sk.skill}
              onChange={(e) =>
                onUpdateSkill(sk.id, Object.keys(sk)[1], e.target.value)
              }
            ></FormField>
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
    </div>
  );
}
