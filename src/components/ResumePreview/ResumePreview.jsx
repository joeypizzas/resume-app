// ResumePreview component

import "./ResumePreview.css";
import { PreviewHeader } from "../PreviewHeader/PreviewHeader.jsx";
import { PreviewSection } from "../PreviewSection/PreviewSection.jsx";
import { SkillsContainer } from "../SkillsContainer/SkillsContainer.jsx";
import { Skill } from "../Skill/Skill.jsx";
import { PreviewItem } from "../PreviewItem/PreviewItem.jsx";

export function ResumePreview({ resumeData, previewRef }) {
  return (
    <div className="resume-preview" ref={previewRef}>
      <PreviewHeader
        location={resumeData.personal.location}
        name={resumeData.personal.name}
        phone={resumeData.personal.phone}
        email={resumeData.personal.email}
      ></PreviewHeader>
      <PreviewSection sectionName="SKILLS">
        <SkillsContainer>
          {resumeData.skills.map((sk) => (
            <Skill key={sk.id} skillName={sk.skill}></Skill>
          ))}
        </SkillsContainer>
      </PreviewSection>
      <PreviewSection sectionName="EXPERIENCE">
        {resumeData.experience.map((exp) => (
          <PreviewItem
            key={exp.id}
            organization={exp.company}
            location={exp.location}
            startDate={exp.startDate}
            endDate={exp.endDate}
            positionOrStudy={exp.position}
            description={exp.description.join("\n")}
          ></PreviewItem>
        ))}
      </PreviewSection>
      <PreviewSection sectionName="EDUCATION">
        {resumeData.education.map((edu) => (
          <PreviewItem
            key={edu.id}
            organization={edu.school}
            location={edu.location}
            startDate={edu.startDate}
            endDate={edu.endDate}
            positionOrStudy={edu.degree}
            description={edu.description.join("\n")}
          ></PreviewItem>
        ))}
      </PreviewSection>
    </div>
  );
}
