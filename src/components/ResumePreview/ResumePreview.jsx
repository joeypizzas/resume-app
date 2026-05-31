// ResumePreview component

import "./ResumePreview.css";
import { PreviewHeader } from "../PreviewHeader/PreviewHeader.jsx";
import { PreviewSection } from "../PreviewSection/PreviewSection.jsx";
import { SkillsContainer } from "../SkillsContainer/SkillsContainer.jsx";
import { Skill } from "../Skill/Skill.jsx";

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
    </div>
  );
}
