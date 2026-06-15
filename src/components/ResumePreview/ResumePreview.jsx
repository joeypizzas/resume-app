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
          {resumeData.skills.map((sk) => (
            <Skill skillName={sk.skill}></Skill>
          ))}
        </SkillsContainer>
      </PreviewSection>
      <PreviewSection sectionName="EXPERIENCE">
        {resumeData.experience.map((exp) => (
          <PreviewItem
            organization={exp.company}
            location={exp.location}
            startDate={exp.startDate}
            endDate={exp.endDate}
            positionOrStudy={exp.position}
            description={exp.description} // fix description display
          ></PreviewItem>
        ))}
      </PreviewSection>
      <PreviewSection sectionName="EDUCATION">
        {resumeData.education.map((edu) => (
          <PreviewItem
            organization={edu.school}
            location={edu.location}
            startDate={edu.startDate}
            endDate={edu.endDate}
            positionOrStudy={edu.degree}
            description={edu.description} // fix description display
          ></PreviewItem>
        ))}
      </PreviewSection>
    </div>
  );
}
