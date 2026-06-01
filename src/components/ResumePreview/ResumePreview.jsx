// ResumePreview component

import "./ResumePreview.css";
import { PreviewHeader } from "../PreviewHeader/PreviewHeader.jsx";
import { PreviewSection } from "../PreviewSection/PreviewSection.jsx";
import { SkillsContainer } from "../SkillsContainer/SkillsContainer.jsx";
import { Skill } from "../Skill/Skill.jsx";
import { PreviewItem } from "../PreviewItem/PreviewItem.jsx";

export function ResumePreview() {
  return (
    <div className="resume-preview">
      <PreviewHeader
        location="New York, NY"
        name="Joey Pizzas"
        phone="1234567890"
        email="joey@pizzas.com"
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
    </div>
  );
}
