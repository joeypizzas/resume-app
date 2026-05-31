// ResumePreview component

import "./ResumePreview.css";
import { PreviewHeader } from "../PreviewHeader/PreviewHeader.jsx";
import { PreviewSection } from "../PreviewSection/PreviewSection.jsx";

export function ResumePreview() {
  return (
    <div className="resume-preview">
      <PreviewHeader
        location="New York, NY"
        name="Joey Pizzas"
        phone="1234567890"
        email="joey@pizzas.com"
      ></PreviewHeader>
      <PreviewSection sectionName="SKILLS"></PreviewSection>
    </div>
  );
}
