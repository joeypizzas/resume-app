// ResumePreview component

import "./ResumePreview.css";
import { PreviewHeader } from "../PreviewHeader/PreviewHeader.jsx";
import { PreviewSection } from "../PreviewSection/PreviewSection.jsx";
import { SkillsContainer } from "../SkillsContainer/SkillsContainer.jsx";
import { Skill } from "../Skill/Skill.jsx";
import { PreviewItem } from "../PreviewItem/PreviewItem.jsx";

export function ResumePreview({ resumeData }) {
  return (
    <div className="resume-preview">
      <PreviewHeader
        location={resumeData.personal.location}
        name={resumeData.personal.name}
        phone={resumeData.personal.phone}
        email={resumeData.personal.email}
      ></PreviewHeader>
      <PreviewSection sectionName="SKILLS">
        <SkillsContainer>
          <Skill skillName="Kneading dough"></Skill>
          <Skill skillName="Tossin' Pies"></Skill>
          <Skill skillName="Operating pizza oven"></Skill>
        </SkillsContainer>
      </PreviewSection>
      <PreviewSection sectionName="EXPERIENCE">
        <PreviewItem
          organization="Joey's Pizza Pies,"
          location="New York, NY"
          startDate="08/2019"
          endDate=" 04/2026"
          positionOrStudy="Head pie guy"
          description="- Directly responsible for the creation of hundreds of delicious pizza pies each day."
        ></PreviewItem>
      </PreviewSection>
      <PreviewSection sectionName="EDUCATION">
        <PreviewItem
          organization="International Academy of Pizza Pies,"
          location="Naples, IT"
          startDate="09/2015"
          endDate="05/2019"
          positionOrStudy="BS, Pizza Pie Sciences"
          description="
            - Golden hands winner in tossin' pies competition (2019)
            - Pepperoni crown holder (2018)
            - University Honors (2018-2019)"
        ></PreviewItem>
      </PreviewSection>
    </div>
  );
}
